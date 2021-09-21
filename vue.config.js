module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: '@import "~@/styles/core/index.scss";'
        },
      },
    },
    assetsDir: 'assets',
  };