"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradingUtils = void 0;
const tokens_1 = require("../config/tokens");
const decimal_js_1 = require("decimal.js");
class TradingUtils {
    /**
     * Convert human-readable amount to base units for blockchain
     */
    static toBaseUnits(amount, symbol) {
        const config = tokens_1.TOKEN_CONFIG[symbol];
        const decimal = new decimal_js_1.Decimal(amount);
        const scaled = decimal.mul(new decimal_js_1.Decimal(10).pow(config.decimals));
        return scaled.toFixed(0);
    }
    /**
     * Convert base units to human-readable amount
     */
    static fromBaseUnits(amount, symbol) {
        const config = tokens_1.TOKEN_CONFIG[symbol];
        const decimal = new decimal_js_1.Decimal(amount);
        const scaled = decimal.div(new decimal_js_1.Decimal(10).pow(config.decimals));
        return scaled.toNumber();
    }
    /**
     * Calculate portfolio drift from target allocation
     */
    static calculateDrift(currentAllocation, targetAllocation) {
        const drift = {};
        for (const [symbol, target] of Object.entries(targetAllocation)) {
            const current = currentAllocation[symbol] || 0;
            drift[symbol] = current - target;
        }
        return drift;
    }
    /**
     * Calculate position size based on risk management rules
     */
    static calculatePositionSize(portfolioValue, riskPercentage, maxPositionSize = 0.3) {
        const riskAmount = portfolioValue * riskPercentage;
        const maxAmount = portfolioValue * maxPositionSize;
        return Math.min(riskAmount, maxAmount);
    }
    /**
     * Calculate Sharpe ratio for performance measurement
     */
    static calculateSharpeRatio(returns, riskFreeRate = 0.02) {
        if (returns.length < 2)
            return 0;
        const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
        const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length;
        const stdDev = Math.sqrt(variance);
        if (stdDev === 0)
            return 0;
        return (avgReturn - riskFreeRate) / stdDev;
    }
    /**
     * Detect market regime (trending, ranging, volatile)
     */
    static detectMarketRegime(priceHistory) {
        if (priceHistory.length < 10)
            return 'RANGING';
        const returns = priceHistory.slice(1).map((price, i) => (price - priceHistory[i]) / priceHistory[i]);
        const volatility = Math.sqrt(returns.reduce((sum, r) => sum + r * r, 0) / returns.length);
        const trend = (priceHistory[priceHistory.length - 1] - priceHistory[0]) / priceHistory[0];
        if (volatility > 0.05)
            return 'VOLATILE';
        if (Math.abs(trend) > 0.1)
            return 'TRENDING';
        return 'RANGING';
    }
}
exports.TradingUtils = TradingUtils;
exports.default = TradingUtils;
//# sourceMappingURL=trading-utils.js.map