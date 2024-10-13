module.exports = {
    apps: [{
      name: "my-express-app",
      script: "./dist/app.js",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_file: ".env",
      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }]
  }