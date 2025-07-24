"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeAdvancedTrade = exports.fetchPortfolioBalance = exports.fetchMarketData = void 0;
const tools_1 = require("@mastra/core/tools");
const axios_1 = __importDefault(require("axios"));
const zod_1 = require("zod");
const tokens_1 = require("../../config/tokens");
exports.fetchMarketData = (0, tools_1.createTool)({
    id: "fetch-market-data",
    description: "Fetch comprehensive market data including prices, volume, and trends",
    inputSchema: zod_1.z.object({
        symbols: zod_1.z.array(zod_1.z.string()).optional().default(["USDC", "WETH", "WBTC"]),
        includeMetrics: zod_1.z.boolean().optional().default(true)
    }),
    outputSchema: zod_1.z.record(zod_1.z.any()),
    execute: async ({ context }) => {
        const { symbols, includeMetrics } = context;
        try {
            const coinIds = symbols.map(symbol => tokens_1.TOKEN_CONFIG[symbol]?.coingeckoId).filter(Boolean);
            const response = await axios_1.default.get("https://api.coingecko.com/api/v3/simple/price", {
                params: {
                    ids: coinIds.join(","),
                    vs_currencies: "usd",
                    include_24hr_change: true,
                    include_24hr_vol: true,
                    include_market_cap: true
                },
                timeout: 10000
            });
            const marketData = {};
            symbols.forEach(symbol => {
                const config = tokens_1.TOKEN_CONFIG[symbol];
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
        }
        catch (error) {
            console.error("Failed to fetch market data:", error);
            throw new Error(`Market data fetch failed: ${error}`);
        }
    }
});
exports.fetchPortfolioBalance = (0, tools_1.createTool)({
    id: "fetch-portfolio-balance",
    description: "Get current portfolio balances from Recall Network",
    inputSchema: zod_1.z.object({}),
    outputSchema: zod_1.z.record(zod_1.z.number()),
    execute: async () => {
        const { RECALL_API_URL, RECALL_API_KEY } = process.env;
        try {
            const response = await axios_1.default.get(`${RECALL_API_URL}/api/balance`, {
                headers: { Authorization: `Bearer ${RECALL_API_KEY}` },
                timeout: 10000
            });
            return response.data;
        }
        catch (error) {
            console.error("Failed to fetch portfolio balance:", error);
            throw new Error(`Portfolio balance fetch failed: ${error}`);
        }
    }
});
exports.executeAdvancedTrade = (0, tools_1.createTool)({
    id: "execute-advanced-trade",
    description: "Execute a sophisticated trade with risk management and position sizing",
    inputSchema: zod_1.z.object({
        fromToken: zod_1.z.string().describe("Token to sell (contract address)"),
        toToken: zod_1.z.string().describe("Token to buy (contract address)"),
        amount: zod_1.z.string().describe("Amount in base units"),
        strategy: zod_1.z.string().describe("Trading strategy being executed"),
        riskLevel: zod_1.z.enum(["LOW", "MEDIUM", "HIGH"]).default("MEDIUM"),
        maxSlippage: zod_1.z.number().optional().default(0.005)
    }),
    outputSchema: zod_1.z.any(),
    execute: async ({ context }) => {
        const { fromToken, toToken, amount, strategy, riskLevel, maxSlippage } = context;
        const { RECALL_API_URL, RECALL_API_KEY } = process.env;
        try {
            const response = await axios_1.default.post(`${RECALL_API_URL}/api/trade/execute`, {
                fromToken,
                toToken,
                amount,
                reason: `${strategy} - Risk: ${riskLevel}, Max Slippage: ${maxSlippage * 100}%`
            }, {
                headers: {
                    Authorization: `Bearer ${RECALL_API_KEY}`,
                    "Content-Type": "application/json"
                },
                timeout: 30000
            });
            return {
                ...response.data,
                executedAt: new Date().toISOString(),
                strategy,
                riskLevel
            };
        }
        catch (error) {
            console.error("Trade execution failed:", error);
            throw new Error(`Trade execution failed: ${error}`);
        }
    }
});
//# sourceMappingURL=market-data.js.map