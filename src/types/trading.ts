export interface MarketData {
  symbol: string;
  price: number;
  priceChange24h: number;
  volume24h: number;
  marketCap: number;
  timestamp: number;
}

export interface Portfolio {
  [symbol: string]: number;
}

export interface TradeSignal {
  action: 'BUY' | 'SELL' | 'HOLD';
  fromToken: string;
  toToken: string;
  amount: string;
  confidence: number;
  reason: string;
  urgency: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface RiskMetrics {
  portfolioValue: number;
  maxDrawdown: number;
  sharpeRatio: number;
  volatility: number;
  diversificationScore: number;
}

export interface TradingContext {
  marketData: Record<string, MarketData>;
  portfolio: Portfolio;
  riskMetrics: RiskMetrics;
  recentTrades: TradeSignal[];
}