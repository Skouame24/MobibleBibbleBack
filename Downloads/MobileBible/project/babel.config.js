module.exports = function(api) {
  api.cache(true);
  module.exports = {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
  
};