"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mastra = void 0;
const mastra_1 = require("@mastra/core/mastra");
const dotenv_1 = require("dotenv");
// Load environment variables
(0, dotenv_1.config)();
// Import agents and workflows
const wagmi_agent_1 = require("./agents/wagmi-agent");
const trading_workflow_1 = require("./workflows/trading-workflow");
// Validate required environment variables
const requiredEnvVars = ['OPENAI_API_KEY', 'RECALL_API_KEY', 'RECALL_API_URL'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:', missingVars.join(', '));
    console.error('Please copy .env.example to .env and fill in your API keys');
    process.exit(1);
}
exports.mastra = new mastra_1.Mastra({
    workflows: { tradingWorkflow: trading_workflow_1.tradingWorkflow },
    agents: { wagmiAgent: wagmi_agent_1.wagmiAgent }
});
// Auto-start message
console.log('🚀 WAGMI Trading Agent Starting...');
console.log('📊 Dashboard available at: http://localhost:4111');
console.log('🤖 Agent chat: http://localhost:4111/agents/wagmiAgent/chat');
console.log('⚡ Workflow: http://localhost:4111/workflows/wagmi-trading-workflow');
console.log('💰 Ready to compete for $20,000 prize pool!');
//# sourceMappingURL=index.js.map