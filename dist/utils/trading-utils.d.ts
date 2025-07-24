import { TokenSymbol } from "../config/tokens";
export declare class TradingUtils {
    /**
     * Convert human-readable amount to base units for blockchain
     */
    static toBaseUnits(amount: number, symbol: TokenSymbol): string;
    /**
     * Convert base units to human-readable amount
     */
    static fromBaseUnits(amount: string, symbol: TokenSymbol): number;
    /**
     * Calculate portfolio drift from target allocation
     */
    static calculateDrift(currentAllocation: Record<string, number>, targetAllocation: Record<string, number>): Record<string, number>;
    /**
     * Calculate position size based on risk management rules
     */
    static calculatePositionSize(portfolioValue: number, riskPercentage: number, maxPositionSize?: number): number;
    /**
     * Calculate Sharpe ratio for performance measurement
     */
    static calculateSharpeRatio(returns: number[], riskFreeRate?: number): number;
    /**
     * Detect market regime (trending, ranging, volatile)
     */
    static detectMarketRegime(priceHistory: number[]): 'TRENDING' | 'RANGING' | 'VOLATILE';
}
export default TradingUtils;
//# sourceMappingURL=trading-utils.d.ts.map