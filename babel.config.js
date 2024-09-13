module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: ['.ts', '.tsx', '.js', '.json', '.ios.js', '.android.js', '.native.js'],
          alias: {
            '@': './src',
            '@assets': './assets',
            '@components': './src/Components',
            '@screens': './src/Screens',
            '@services': './src/Services',
            '@utils': './src/Utils',
            '@constants': './src/Constants',
            '@theme': './src/Theme',
            '@api': './src/Services/api',
          }
        }
      ]
    ]
  };
};
