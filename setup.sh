#!/bin/bash

echo "🚀 Setting up WAGMI Trading Agent for Autonomous Apes Hackathon 2025"
echo "=================================================================="

# Check if .env exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please edit .env and add your API keys:"
    echo "   - OPENAI_API_KEY=sk-..."
    echo "   - RECALL_API_KEY=..."
    echo "   - RECALL_API_URL=https://api.sandbox.competitions.recall.network"
    echo ""
else
    echo "✅ .env file already exists"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Test the setup
echo "🧪 Testing agent setup..."
node test-agent.js

echo ""
echo "🎯 Setup Complete! Next steps:"
echo "1. Edit .env with your API keys"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:4111"
echo "4. Start trading and win that $20,000 prize! 🏆"
echo ""
echo "WAGMI! 🚀"