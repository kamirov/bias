# Bias Monorepo

A monorepo containing a React frontend application built with Vite and TypeScript, deployable to AWS Lambda using the Serverless Framework.

## 🚀 Features

- **Monorepo Structure**: Organized with pnpm workspaces
- **Modern Frontend**: React 18 + TypeScript + Vite
- **Serverless Ready**: Deployable to AWS Lambda
- **CI/CD**: Automated deployment with GitHub Actions
- **Offline Development**: Serverless offline for local testing

## 📁 Project Structure

```
bias/
├── apps/
│   └── ui-web/          # React frontend application
│       ├── src/         # Source code
│       ├── dist/        # Build output
│       ├── serverless.yml # Serverless configuration
│       └── handler.js   # AWS Lambda handler
├── .github/workflows/   # GitHub Actions
├── package.json         # Root package.json
└── pnpm-workspace.yaml  # pnpm workspace config
```

## 🛠️ Prerequisites

- Node.js 22+
- pnpm 8+
- AWS CLI (for deployment)
- AWS credentials configured

## 🚀 Getting Started

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development server (runs on http://localhost:4200)
pnpm dev

# Build for production
pnpm build

# Deploy to AWS Lambda
pnpm deploy
```

### Installation

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Serverless Development

```bash
# Start serverless offline
pnpm deploy:offline

# Deploy to AWS Lambda
pnpm deploy
```

## 🔧 Configuration

### AWS Credentials

Set up your AWS credentials for deployment:

```bash
aws configure
```

Or set environment variables:

```bash
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key
export AWS_REGION=us-east-1
```

### GitHub Secrets

For automated deployment, add these secrets to your GitHub repository:

- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `AWS_REGION`: Your AWS region (optional, defaults to us-east-1)

## 📦 Deployment

### Manual Deployment

```bash
# Deploy to dev stage
cd apps/ui-web
serverless deploy --stage dev

# Deploy to prod stage
serverless deploy --stage prod
```

### Automated Deployment

The GitHub Actions workflow automatically deploys:

- **Pull Requests**: Deploy to `dev` stage
- **Main Branch**: Deploy to `prod` stage

## 🏗️ Architecture

### Frontend Stack

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **CSS**: Modern styling with CSS modules

### Serverless Stack

- **AWS Lambda**: Serverless compute
- **API Gateway**: HTTP API
- **Serverless Framework**: Infrastructure as code
- **Serverless Offline**: Local development

## 🔍 Available Scripts

### Root Level

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm preview`: Preview production build
- `pnpm deploy`: Deploy to AWS Lambda
- `pnpm deploy:offline`: Start serverless offline

### UI Web App

- `pnpm dev`: Start Vite dev server
- `pnpm build`: Build with TypeScript and Vite
- `pnpm lint`: Run ESLint
- `pnpm preview`: Preview production build
- `pnpm deploy`: Deploy to AWS Lambda
- `pnpm deploy:offline`: Start serverless offline
- `pnpm remove`: Remove deployed resources

## 🌐 Environment Variables

| Variable     | Description      | Default       |
| ------------ | ---------------- | ------------- |
| `NODE_ENV`   | Environment mode | `development` |
| `AWS_REGION` | AWS region       | `us-east-1`   |

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use functional components with hooks
- Prefer named exports

### File Structure

- Keep components in `src/` directory
- Use descriptive file names
- Group related components together
- Export types from central location

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
