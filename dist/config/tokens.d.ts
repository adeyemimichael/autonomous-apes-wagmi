export declare const TOKEN_CONFIG: {
    readonly USDC: {
        readonly address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
        readonly decimals: 6;
        readonly coingeckoId: "usd-coin";
        readonly symbol: "USDC";
    };
    readonly WETH: {
        readonly address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        readonly decimals: 18;
        readonly coingeckoId: "weth";
        readonly symbol: "WETH";
    };
    readonly WBTC: {
        readonly address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
        readonly decimals: 8;
        readonly coingeckoId: "wrapped-bitcoin";
        readonly symbol: "WBTC";
    };
};
export type TokenSymbol = keyof typeof TOKEN_CONFIG;
export declare const DEFAULT_PORTFOLIO_WEIGHTS: {
    readonly USDC: 0.2;
    readonly WETH: 0.5;
    readonly WBTC: 0.3;
};
//# sourceMappingURL=tokens.d.ts.map