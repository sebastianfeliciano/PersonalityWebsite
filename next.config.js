module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /sequelize/,
        //use: 'null-loader',
      });
  
      return config;
    },
  };