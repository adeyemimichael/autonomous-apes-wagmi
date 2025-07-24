import { MarketData, TradeSignal } from "../types/trading";
import { TradingUtils } from "../utils/trading-utils";

export class CompetitiveEdgeStrategy {
  /**
   * Advanced momentum strategy with volume confirmation
   */
  static generateMomentumSignals(marketData: Record<string, MarketData>): TradeSignal[] {
    const signals: TradeSignal[] = [];
    
    for (const [symbol, data] of Object.entries(marketData)) {
      if (symbol === 'USDC') continue; // Skip stablecoin
      
      const { priceChange24h, volume24h, price } = data;
      
      // Strong momentum buy signal
      if (priceChange24h > 5 && volume24h > 1000000) {
        signals.push({
          action: 'BUY',
          fromToken: 'USDC',
          toToken: symbol,
          amount: '1000', // Will be calculated based on position sizing
          confidence: Math.min(priceChange24h / 10, 0.9),
          reason: `Strong momentum: ${priceChange24h.toFixed(2)}% gain with high volume`,
          urgency: priceChange24h > 10 ? 'HIGH' : 'MEDIUM'
        });
      }
      
      // Momentum sell signal
      if (priceChange24h < -3 && volume24h > 500000) {
        signals.push({
          action: 'SELL',
          fromToken: symbol,
          toToken: 'USDC',
          amount: '0.5', // Partial position
          confidence: Math.min(Math.abs(priceChange24h) / 10, 0.8),
          reason: `Negative momentum: ${priceChange24h.toFixed(2)}% decline`,
          urgency: priceChange24h < -8 ? 'HIGH' : 'MEDIUM'
        });
      }
    }
    
    return signals.sort((a, b) => b.confidence - a.confidence);
  }

  /**
   * Mean reversion strategy for oversold conditions
   */
  static generateMeanReversionSignals(marketData: Record<string, MarketData>): TradeSignal[] {
    const signals: TradeSignal[] = [];
    
    for (const [symbol, data] of Object.entries(marketData)) {
      if (symbol === 'USDC') continue;
      
      const { priceChange24h, volume24h } = data;
      
      // Oversold buy opportunity
      if (priceChange24h < -10 && volume24h > 2000000) {
        signals.push({
          action: 'BUY',
          fromToken: 'USDC',
          toToken: symbol,
          amount: '2000',
          confidence: Math.min(Math.abs(priceChange24h) / 15, 0.85),
          reason: `Oversold condition: ${priceChange24h.toFixed(2)}% decline with high volume`,
          urgency: priceChange24h < -15 ? 'HIGH' : 'MEDIUM'
        });
      }
      
      // Take profit on mean reversion
      if (priceChange24h > 15) {
        signals.push({
          action: 'SELL',
          fromToken: symbol,
          toToken: 'USDC',
          amount: '0.3', // Take partial profits
          confidence: 0.7,
          reason: `Mean reversion profit taking: ${priceChange24h.toFixed(2)}% gain`,
          urgency: 'MEDIUM'
        });
      }
    }
    
    return signals.sort((a, b) => b.confidence - a.confidence);
  }

  /**
   * Arbitrage detection between assets
   */
  static detectArbitrageOpportunities(marketData: Record<string, MarketData>): TradeSignal[] {
    const signals: TradeSignal[] = [];
    
    // Simple correlation-based arbitrage
    const ethData = marketData['WETH'];
    const btcData = marketData['WBTC'];
    
    if (ethData && btcData) {
      const ethBtcRatio = ethData.price / btcData.price;
      const historicalRatio = 0.065; // Approximate historical ETH/BTC ratio
      
      const deviation = Math.abs(ethBtcRatio - historicalRatio) / historicalRatio;
      
      if (deviation > 0.05) { // 5% deviation threshold
        if (ethBtcRatio > historicalRatio * 1.05) {
          // ETH overvalued relative to BTC
          signals.push({
            action: 'SELL',
            fromToken: 'WETH',
            toToken: 'WBTC',
            amount: '1.0',
            confidence: Math.min(deviation, 0.8),
            reason: `ETH/BTC ratio arbitrage: ETH overvalued by ${(deviation * 100).toFixed(1)}%`,
            urgency: 'MEDIUM'
          });
        } else {
          // ETH undervalued relative to BTC
          signals.push({
            action: 'SELL',
            fromToken: 'WBTC',
            toToken: 'WETH',
            amount: '0.1',
            confidence: Math.min(deviation, 0.8),
            reason: `ETH/BTC ratio arbitrage: ETH undervalued by ${(deviation * 100).toFixed(1)}%`,
            urgency: 'MEDIUM'
          });
        }
      }
    }
    
    return signals;
  }

  /**
   * Portfolio optimization signals
   */
  static generateRebalanceSignals(
    currentPortfolio: Record<string, number>,
    targetAllocation: Record<string, number>,
    marketData: Record<string, MarketData>
  ): TradeSignal[] {
    const signals: TradeSignal[] = [];
    const totalValue = Object.entries(currentPortfolio).reduce(
      (sum, [symbol, amount]) => sum + (amount * (marketData[symbol]?.price || 0)), 0
    );
    
    if (totalValue === 0) return signals;
    
    const drift = TradingUtils.calculateDrift(
      Object.fromEntries(
        Object.entries(currentPortfolio).map(([symbol, amount]) => [
          symbol,
          (amount * (marketData[symbol]?.price || 0)) / totalValue
        ])
      ),
      targetAllocation
    );
    
    for (const [symbol, driftAmount] of Object.entries(drift)) {
      if (Math.abs(driftAmount) > 0.05) { // 5% drift threshold
        const action = driftAmount > 0 ? 'SELL' : 'BUY';
        const amount = Math.abs(driftAmount * totalValue / (marketData[symbol]?.price || 1));
        
        signals.push({
          action,
          fromToken: action === 'SELL' ? symbol : 'USDC',
          toToken: action === 'SELL' ? 'USDC' : symbol,
          amount: amount.toString(),
          confidence: 0.9,
          reason: `Portfolio rebalancing: ${symbol} drift ${(driftAmount * 100).toFixed(1)}%`,
          urgency: Math.abs(driftAmount) > 0.1 ? 'HIGH' : 'MEDIUM'
        });
      }
    }
    
    return signals.sort((a, b) => b.confidence - a.confidence);
  }

  /**
   * Master strategy that combines all signals
   */
  static generateAllSignals(
    marketData: Record<string, MarketData>,
    currentPortfolio: Record<string, number>,
    targetAllocation: Record<string, number>
  ): TradeSignal[] {
    const momentumSignals = this.generateMomentumSignals(marketData);
    const meanReversionSignals = this.generateMeanReversionSignals(marketData);
    const arbitrageSignals = this.detectArbitrageOpportunities(marketData);
    const rebalanceSignals = this.generateRebalanceSignals(currentPortfolio, targetAllocation, marketData);
    
    // Combine and prioritize signals
    const allSignals = [
      ...rebalanceSignals.map(s => ({ ...s, priority: 1 })), // Highest priority
      ...arbitrageSignals.map(s => ({ ...s, priority: 2 })),
      ...momentumSignals.map(s => ({ ...s, priority: 3 })),
      ...meanReversionSignals.map(s => ({ ...s, priority: 4 }))
    ];
    
    // Sort by priority, then confidence, then urgency
    return allSignals
      .sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        if (a.confidence !== b.confidence) return b.confidence - a.confidence;
        const urgencyOrder = { HIGH: 3, MEDIUM: 2, LOW: 1 };
        return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
      })
      .slice(0, 5); // Top 5 signals
  }
}