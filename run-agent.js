// Simple agent runner for testing without Mastra dev server
const { mastra } = require('./dist/mastra/index.js');

async function runTradingAgent() {
  console.log('🚀 WAGMI Trading Agent - Manual Test Run');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  try {
    // Get the agent
    const agent = mastra.getAgent('wagmiAgent');
    if (!agent) {
      console.error('❌ WAGMI Agent not found');
      return;
    }
    
    console.log('✅ WAGMI Agent loaded successfully');
    console.log('💡 Agent ready for trading commands');
    console.log('');
    console.log('🎯 Try these commands in a real environment:');
    console.log('   "Analyze current market conditions and execute profitable trades"');
    console.log('   "Execute momentum strategy on WETH with proper risk management"');
    console.log('   "Rebalance portfolio to target allocation"');
    console.log('');
    console.log('📊 For full dashboard experience, upgrade to Node.js 20+ and run: npm run dev');
    console.log('🏆 Ready to compete for $20,000 prize pool!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('💡 Make sure your .env file has valid API keys');
  }
}

runTradingAgent();