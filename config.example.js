// Example configuration file
// Copy this to config.js and update with your values

module.exports = {
  // AWS Configuration
  aws: {
    region: process.env.AWS_REGION || "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },

  // Application Configuration
  app: {
    name: "Bias UI Web",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
  },

  // Serverless Configuration
  serverless: {
    stage: process.env.STAGE || "dev",
    region: process.env.AWS_REGION || "us-east-1",
  },
};
