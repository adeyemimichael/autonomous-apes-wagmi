import { createStep, createWorkflow } from "@mastra/core/workflows";
import { z } from "zod";

const tradeStep = createStep({
  id: "run-wagmi-agent",
  description: "Execute WAGMI trading strategy with market analysis and trade execution",
  inputSchema: z.object({
    strategy: z.enum(["MOMENTUM", "MEAN_REVERSION", "REBALANCE", "ADAPTIVE"]).default("ADAPTIVE")
  }),
  outputSchema: z.object({
    result: z.string(),
  }),
  execute: async ({ mastra }) => {
    const agent = mastra?.getAgent("wagmiAgent");
    if (!agent) throw new Error("wagmiAgent not found");

    const strategy = "ADAPTIVE"; // Default strategy
    
    const prompt = `Execute comprehensive WAGMI trading strategy: ${strategy}

MISSION: Maximize portfolio returns for Autonomous Apes Hackathon 2025

EXECUTE THESE STEPS:
1. Fetch current market data for USDC, WETH, WBTC
2. Get current portfolio balance
3. Analyze market conditions and trends
4. Identify profitable trading opportunities
5. Execute high-conviction trades with proper risk management
6. Optimize portfolio allocation (Target: WETH 50%, WBTC 30%, USDC 20%)

STRATEGY FOCUS: ${strategy}
- MOMENTUM: Buy strong performers, sell weak assets
- MEAN_REVERSION: Buy oversold, sell overbought
- REBALANCE: Maintain target allocation
- ADAPTIVE: Combine all strategies based on market conditions

Execute trades that will win the $20,000 prize pool! WAGMI! 🚀`;

    const response = await agent.stream([{ role: "user", content: prompt }]);

    let text = "";
    for await (const chunk of response.textStream) {
      process.stdout.write(chunk);
      text += chunk;
    }

    return { result: text };
  },
});

export const tradingWorkflow = createWorkflow({
  id: "wagmi-trading-workflow",
  inputSchema: z.object({
    strategy: z.enum(["MOMENTUM", "MEAN_REVERSION", "REBALANCE", "ADAPTIVE"]).default("ADAPTIVE")
  }),
  outputSchema: z.object({
    result: z.string(),
  }),
}).then(tradeStep);

tradingWorkflow.commit();