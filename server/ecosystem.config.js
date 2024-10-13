module.exports = {
  apps: [{
    name: "express-api",
    script: "./dist/app.js",
    interpreter: "yarn",
    interpreter_args: "node",
    instances: "max",
    exec_mode: "cluster",
    env_production: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};