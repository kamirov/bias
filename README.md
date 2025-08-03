# Bias Monorepo

A monorepo containing a React frontend application built with Vite and TypeScript, deployable to AWS S3 + CloudFront for static hosting.

## 🚀 Features

- **Monorepo Structure**: Organized with pnpm workspaces
- **Modern Frontend**: React 18 + TypeScript + Vite
- **Static Hosting**: Deployable to AWS S3 + CloudFront
- **CloudFront CDN**: Global content delivery with automatic cache invalidation
- **Environment Configuration**: Centralized config management
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

### Deployment

```bash
# Deploy to AWS S3 + CloudFront
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

# The application will be available at the CloudFront URL
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

### AWS Infrastructure

- **S3**: Static website hosting
- **CloudFront**: Global CDN with cache invalidation
- **Serverless Framework**: Infrastructure as code

## 🔍 Available Scripts

### Root Level

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm preview`: Preview production build
- `pnpm deploy`: Deploy to AWS S3 + CloudFront

### UI Web App

- `pnpm dev`: Start Vite dev server
- `pnpm build`: Build with TypeScript and Vite
- `pnpm lint`: Run ESLint
- `pnpm preview`: Preview production build
- `pnpm deploy`: Deploy to AWS S3 + CloudFront
- `pnpm remove`: Remove deployed resources

## 🌐 Environment Variables

### Application Variables
| Variable              | Description                    | Default       |
| --------------------- | ------------------------------ | ------------- |
| `VITE_APP_TITLE`      | Application title              | `Bias UI Web` |
| `VITE_APP_VERSION`    | Application version            | `1.0.0`       |
| `VITE_API_URL`        | API endpoint URL               | ``            |
| `VITE_AWS_REGION`     | AWS region                     | `us-east-1`   |

### AWS Configuration
| Variable              | Description                    | Default       |
| --------------------- | ------------------------------ | ------------- |
| `AWS_REGION`          | AWS region                     | `us-east-1`   |
| `AWS_ACCESS_KEY_ID`   | AWS access key                 | -             |
| `AWS_SECRET_ACCESS_KEY`| AWS secret key                 | -             |

### Serverless Configuration
| Variable              | Description                    | Default       |
| --------------------- | ------------------------------ | ------------- |
| `STAGE`               | Deployment stage               | `dev`         |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID | -             |

### Environment Setup
Copy the example environment file and configure your variables:
```bash
cp apps/ui-web/env.example apps/ui-web/.env
# Edit .env with your values
```

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
