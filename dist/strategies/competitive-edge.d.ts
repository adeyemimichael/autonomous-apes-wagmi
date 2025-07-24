import { MarketData, TradeSignal } from "../types/trading";
export declare class CompetitiveEdgeStrategy {
    /**
     * Advanced momentum strategy with volume confirmation
     */
    static generateMomentumSignals(marketData: Record<string, MarketData>): TradeSignal[];
    /**
     * Mean reversion strategy for oversold conditions
     */
    static generateMeanReversionSignals(marketData: Record<string, MarketData>): TradeSignal[];
    /**
     * Arbitrage detection between assets
     */
    static detectArbitrageOpportunities(marketData: Record<string, MarketData>): TradeSignal[];
    /**
     * Portfolio optimization signals
     */
    static generateRebalanceSignals(currentPortfolio: Record<string, number>, targetAllocation: Record<string, number>, marketData: Record<string, MarketData>): TradeSignal[];
    /**
     * Master strategy that combines all signals
     */
    static generateAllSignals(marketData: Record<string, MarketData>, currentPortfolio: Record<string, number>, targetAllocation: Record<string, number>): TradeSignal[];
}
//# sourceMappingURL=competitive-edge.d.ts.map