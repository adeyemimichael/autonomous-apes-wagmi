export const TOKEN_CONFIG = {
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
} as const;

export type TokenSymbol = keyof typeof TOKEN_CONFIG;

export const DEFAULT_PORTFOLIO_WEIGHTS = {
  USDC: 0.20,
  WETH: 0.50,
  WBTC: 0.30
} as const;