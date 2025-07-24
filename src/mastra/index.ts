import { Mastra } from "@mastra/core/mastra";
import { config } from "dotenv";

// Load environment variables
config();

// Import agents and workflows
import { wagmiAgent } from "./agents/wagmi-agent";
import { tradingWorkflow } from "./workflows/trading-workflow";

// Validate required environment variables
const requiredEnvVars = ['OPENAI_API_KEY', 'RECALL_API_KEY', 'RECALL_API_URL'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingVars.join(', '));
  console.error('Please copy .env.example to .env and fill in your API keys');
  process.exit(1);
}

export const mastra = new Mastra({
  workflows: { tradingWorkflow },
  agents: { wagmiAgent }
});

// Auto-start message
console.log('🚀 WAGMI Trading Agent Starting...');
console.log('📊 Dashboard available at: http://localhost:4111');
console.log('🤖 Agent chat: http://localhost:4111/agents/wagmiAgent/chat');
console.log('⚡ Workflow: http://localhost:4111/workflows/wagmi-trading-workflow');
console.log('💰 Ready to compete for $20,000 prize pool!');