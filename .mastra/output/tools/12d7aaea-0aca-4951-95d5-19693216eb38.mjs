import { createTool } from '@mastra/core/tools';
import axios from 'axios';
import { z } from 'zod';

const TOKEN_CONFIG = {
  USDC: {
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
    coingeckoId: "usd-coin",
    symbol: "USDC"
  },
  WETH: {
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    decimals: 18,
    coingeckoId: "weth",
    symbol: "WETH"
  },
  WBTC: {
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    decimals: 8,
    coingeckoId: "wrapped-bitcoin",
    symbol: "WBTC"
  }
};

const fetchMarketData = createTool({
  id: "fetch-market-data",
  description: "Fetch comprehensive market data including prices, volume, and trends",
  inputSchema: z.object({
    symbols: z.array(z.string()).optional().default(["USDC", "WETH", "WBTC"]),
    includeMetrics: z.boolean().optional().default(true)
  }),
  outputSchema: z.record(z.any()),
  execute: async ({ context }) => {
    const { symbols} = context;
    try {
      const coinIds = symbols.map((symbol) => TOKEN_CONFIG[symbol]?.coingeckoId).filter(Boolean);
      const response = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
        params: {
          ids: coinIds.join(","),
          vs_currencies: "usd",
          include_24hr_change: true,
          include_24hr_vol: true,
          include_market_cap: true
        },
        timeout: 1e4
      });
      const marketData = {};
      symbols.forEach((symbol) => {
        const config = TOKEN_CONFIG[symbol];
        if (config && response.data[config.coingeckoId]) {
          const data = response.data[config.coingeckoId];
          marketData[symbol] = {
            symbol,
            price: data.usd || 0,
            priceChange24h: data.usd_24h_change || 0,
            volume24h: data.usd_24h_vol || 0,
            marketCap: data.usd_market_cap || 0,
            timestamp: Date.now()
          };
        }
      });
      return marketData;
    } catch (error) {
      console.error("Failed to fetch market data:", error);
      throw new Error(`Market data fetch failed: ${error}`);
    }
  }
});
const fetchPortfolioBalance = createTool({
  id: "fetch-portfolio-balance",
  description: "Get current portfolio balances from Recall Network",
  inputSchema: z.object({}),
  outputSchema: z.record(z.number()),
  execute: async () => {
    const { RECALL_API_URL, RECALL_API_KEY } = process.env;
    try {
      const response = await axios.get(`${RECALL_API_URL}/api/balance`, {
        headers: { Authorization: `Bearer ${RECALL_API_KEY}` },
        timeout: 1e4
      });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch portfolio balance:", error);
      throw new Error(`Portfolio balance fetch failed: ${error}`);
    }
  }
});
const executeAdvancedTrade = createTool({
  id: "execute-advanced-trade",
  description: "Execute a sophisticated trade with risk management and position sizing",
  inputSchema: z.object({
    fromToken: z.string().describe("Token to sell (contract address)"),
    toToken: z.string().describe("Token to buy (contract address)"),
    amount: z.string().describe("Amount in base units"),
    strategy: z.string().describe("Trading strategy being executed"),
    riskLevel: z.enum(["LOW", "MEDIUM", "HIGH"]).default("MEDIUM"),
    maxSlippage: z.number().optional().default(5e-3)
  }),
  outputSchema: z.any(),
  execute: async ({ context }) => {
    const { fromToken, toToken, amount, strategy, riskLevel, maxSlippage } = context;
    const { RECALL_API_URL, RECALL_API_KEY } = process.env;
    try {
      const response = await axios.post(
        `${RECALL_API_URL}/api/trade/execute`,
        {
          fromToken,
          toToken,
          amount,
          reason: `${strategy} - Risk: ${riskLevel}, Max Slippage: ${maxSlippage * 100}%`
        },
        {
          headers: {
            Authorization: `Bearer ${RECALL_API_KEY}`,
            "Content-Type": "application/json"
          },
          timeout: 3e4
        }
      );
      return {
        ...response.data,
        executedAt: (/* @__PURE__ */ new Date()).toISOString(),
        strategy,
        riskLevel
      };
    } catch (error) {
      console.error("Trade execution failed:", error);
      throw new Error(`Trade execution failed: ${error}`);
    }
  }
});

export { executeAdvancedTrade, fetchMarketData, fetchPortfolioBalance };
//# sourceMappingURL=12d7aaea-0aca-4951-95d5-19693216eb38.mjs.map
