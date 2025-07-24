# 🚀 WAGMI Trading Agent - Autonomous Apes Hackathon 2025

A sophisticated AI trading agent built with Mastra framework for the Autonomous Apes AI Agent Trading Hackathon. Designed to compete for the $20,000 prize pool with advanced portfolio management, risk controls, and adaptive strategies.

## 🎯 Features

- **Advanced Portfolio Management**: Dynamic rebalancing with drift detection
- **Multi-Strategy Trading**: Momentum, mean reversion, and adaptive strategies  
- **Risk Management**: Position sizing, stop-losses, and volatility controls
- **Real-time Market Analysis**: CoinGecko integration with trend detection
- **AI-Powered Decisions**: GPT-4o reasoning for trade execution
- **Comprehensive Dashboard**: Built-in Mastra UI for monitoring and control

## 🏆 Competitive Advantages

1. **Sophisticated Risk Management**: Never risk more than 30% on single trades
2. **Multi-Strategy Approach**: Adapts to different market conditions
3. **Real-time Optimization**: Continuous portfolio rebalancing
4. **Performance Tracking**: Sharpe ratio and drawdown monitoring
5. **Hackathon-Optimized**: Built specifically for competition success

## 🚀 Quick Start

### 1. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your API keys
OPENAI_API_KEY=sk-...
RECALL_API_KEY=...
RECALL_API_URL=https://api.sandbox.competitions.recall.network
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Agent

```bash
npm run dev
```

### 4. Access Dashboard

- **Main Dashboard**: http://localhost:4111
- **Agent Chat**: http://localhost:4111/agents/wagmiAgent/chat  
- **Trading Workflow**: http://localhost:4111/workflows/wagmi-trading-workflow

## 💰 Trading Strategies

### Momentum Strategy
- Buys assets with >5% 24h gains
- Sells assets with <-3% declines
- Volume confirmation required

### Mean Reversion
- Identifies oversold conditions (>10% decline)
- Scales into positions during dips
- Takes profits on 15%+ gains

### Portfolio Rebalancing
- Target: WETH 50%, WBTC 30%, USDC 20%
- Rebalances when drift >5%
- Increases USDC during volatility

### Risk Management
- Maximum 30% position size
- Stop-losses at -8%
- Minimum 15% USDC liquidity

## 🎮 How to Use

### Chat Interface
Navigate to the agent chat and try these commands:

```
"Analyze current market conditions and execute profitable trades"
"Rebalance portfolio to target allocation"
"Execute momentum strategy on WETH"
"Check portfolio performance and risk metrics"
```

### Workflow Execution
Run the complete trading workflow:

```bash
# Via dashboard or programmatically
mastra.workflows.tradingWorkflow.execute({
  strategy: "ADAPTIVE",
  maxTrades: 3
})
```

## 📊 Performance Monitoring

The agent tracks:
- Portfolio value and returns
- Sharpe ratio calculation
- Maximum drawdown
- Win/loss ratios
- Risk-adjusted performance

## 🛠 Architecture

```
src/
├── config/
│   └── tokens.ts          # Token configurations
├── mastra/
│   ├── agents/
│   │   └── wagmi-agent.ts # Main trading agent
│   ├── tools/
│   │   └── market-data.ts # Trading tools
│   └── workflows/
│       └── trading-workflow.ts # Trading workflow
├── types/
│   └── trading.ts         # Type definitions
├── utils/
│   └── trading-utils.ts   # Utility functions
└── index.ts              # Main application
```

## 🏁 Competition Strategy

1. **Start Conservative**: Begin with balanced portfolio
2. **Monitor Performance**: Track metrics via dashboard
3. **Adapt Quickly**: Adjust strategy based on market conditions
4. **Risk Management**: Never exceed position limits
5. **Compound Gains**: Reinvest profits for exponential growth

## 🔧 Configuration

Adjust trading parameters in `.env`:

```bash
RISK_TOLERANCE=0.02        # 2% risk per trade
MAX_POSITION_SIZE=0.3      # 30% max position
REBALANCE_THRESHOLD=0.05   # 5% drift threshold
```

## 🚨 Important Notes

- This is for the Recall Network sandbox environment
- No real funds are at risk during development
- Register for the competition at https://register.recall.network
- Competition deadline: July 22, 2025, 23:59 UTC

## 🎯 Next Steps

1. **Test Thoroughly**: Run multiple scenarios in sandbox
2. **Optimize Parameters**: Fine-tune risk and allocation settings
3. **Monitor Performance**: Track key metrics and adjust
4. **Submit Entry**: Register for competition before deadline

## 🏆 WAGMI - We're All Gonna Make It!

Built for the Autonomous Apes AI Agent Trading Hackathon 2025. Let's secure that $20,000 prize pool! 🚀

---

*Good luck in the competition! May your trades be profitable and your risk management solid.* 💎🙌