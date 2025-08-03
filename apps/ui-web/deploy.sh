#!/bin/bash

# Deploy script for Bias UI Web
set -e

echo "🚀 Starting deployment..."

# Build the application
echo "📦 Building application..."
pnpm build

# Deploy to serverless
echo "☁️  Deploying to AWS Lambda..."
npx serverless deploy --stage ${1:-dev}

echo "✅ Deployment complete!"
echo "🌐 Your application is now live!" 