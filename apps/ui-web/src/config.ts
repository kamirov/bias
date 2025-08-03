// Application configuration
export const config = {
  app: {
    title: import.meta.env.VITE_APP_TITLE || "Bias UI Web",
    version: import.meta.env.VITE_APP_VERSION || "1.0.0",
    apiUrl: import.meta.env.VITE_API_URL || "",
  },
  aws: {
    region: import.meta.env.VITE_AWS_REGION || "us-east-1",
  },
  environment: import.meta.env.MODE || "development",
} as const;

export type Config = typeof config;
