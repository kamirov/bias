#!/bin/bash

# Deploy script for Bias UI Web
set -e

# Load environment variables if .env file exists
if [ -f .env ]; then
  echo "📄 Loading environment variables from .env file..."
  export $(cat .env | grep -v '^#' | xargs)
fi

STAGE=${1:-dev}
REGION=${AWS_REGION:-us-east-1}

echo "🚀 Starting deployment to stage: $STAGE in region: $REGION..."

# Build the application
echo "📦 Building application..."
pnpm build

# Deploy to serverless
echo "☁️  Deploying to AWS Lambda..."
npx serverless deploy --stage $STAGE --region $REGION

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
npx serverless cloudfront-invalidate --stage $STAGE

echo "✅ Deployment complete!"
echo "🌐 Your application is now live at the CloudFront URL!"
echo "📊 CloudFront cache has been invalidated" 