module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', {
        targets: {
          browsers: ['> 1%', 'not chrome < 59'],
        },
      }],
      '@babel/preset-react',
    ],
    plugins: [
      ['babel-plugin-styled-components', {
        displayName: true,
        fileName: false,
      }],
      '@babel/plugin-transform-runtime',
    ],
  };
};
