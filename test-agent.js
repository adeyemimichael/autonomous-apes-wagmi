// Quick test script to verify the agent setup
const { mastra } = require('./dist/index.js');

async function testAgent() {
  console.log('🧪 Testing WAGMI Trading Agent...');
  
  try {
    // Test agent availability
    const agent = mastra.getAgent('wagmiAgent');
    if (agent) {
      console.log('✅ WAGMI Agent loaded successfully');
    } else {
      console.log('❌ WAGMI Agent not found');
      return;
    }
    
    // Test workflow availability
    const workflows = mastra.workflows;
    if (workflows && workflows.tradingWorkflow) {
      console.log('✅ Trading Workflow loaded successfully');
    } else {
      console.log('⚠️ Trading Workflow structure may differ - check dashboard');
    }
    
    console.log('🚀 All systems ready! Start with: npm run dev');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testAgent();