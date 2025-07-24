import { TOKEN_CONFIG, TokenSymbol } from "../config/tokens";
import { Decimal } from "decimal.js";

export class TradingUtils {
  /**
   * Convert human-readable amount to base units for blockchain
   */
  static toBaseUnits(amount: number, symbol: TokenSymbol): string {
    const config = TOKEN_CONFIG[symbol];
    const decimal = new Decimal(amount);
    const scaled = decimal.mul(new Decimal(10).pow(config.decimals));
    return scaled.toFixed(0);
  }

  /**
   * Convert base units to human-readable amount
   */
  static fromBaseUnits(amount: string, symbol: TokenSymbol): number {
    const config = TOKEN_CONFIG[symbol];
    const decimal = new Decimal(amount);
    const scaled = decimal.div(new Decimal(10).pow(config.decimals));
    return scaled.toNumber();
  }

  /**
   * Calculate portfolio drift from target allocation
   */
  static calculateDrift(
    currentAllocation: Record<string, number>,
    targetAllocation: Record<string, number>
  ): Record<string, number> {
    const drift: Record<string, number> = {};
    
    for (const [symbol, target] of Object.entries(targetAllocation)) {
      const current = currentAllocation[symbol] || 0;
      drift[symbol] = current - target;
    }
    
    return drift;
  }

  /**
   * Calculate position size based on risk management rules
   */
  static calculatePositionSize(
    portfolioValue: number,
    riskPercentage: number,
    maxPositionSize: number = 0.3
  ): number {
    const riskAmount = portfolioValue * riskPercentage;
    const maxAmount = portfolioValue * maxPositionSize;
    return Math.min(riskAmount, maxAmount);
  }

  /**
   * Calculate Sharpe ratio for performance measurement
   */
  static calculateSharpeRatio(
    returns: number[],
    riskFreeRate: number = 0.02
  ): number {
    if (returns.length < 2) return 0;
    
    const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
    const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length;
    const stdDev = Math.sqrt(variance);
    
    if (stdDev === 0) return 0;
    return (avgReturn - riskFreeRate) / stdDev;
  }

  /**
   * Detect market regime (trending, ranging, volatile)
   */
  static detectMarketRegime(priceHistory: number[]): 'TRENDING' | 'RANGING' | 'VOLATILE' {
    if (priceHistory.length < 10) return 'RANGING';
    
    const returns = priceHistory.slice(1).map((price, i) => 
      (price - priceHistory[i]) / priceHistory[i]
    );
    
    const volatility = Math.sqrt(
      returns.reduce((sum, r) => sum + r * r, 0) / returns.length
    );
    
    const trend = (priceHistory[priceHistory.length - 1] - priceHistory[0]) / priceHistory[0];
    
    if (volatility > 0.05) return 'VOLATILE';
    if (Math.abs(trend) > 0.1) return 'TRENDING';
    return 'RANGING';
  }
}

export default TradingUtils;