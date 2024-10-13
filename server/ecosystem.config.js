module.exports = {
  apps: [{
    name: "my-express-app",
    script: "./src/app.ts",
    interpreter: "node",
    interpreterArgs: "--require ts-node/register --require tsconfig-paths/register",
    env_production: {
      NODE_ENV: "production",
    }
  }]
};