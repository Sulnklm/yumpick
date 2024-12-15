// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],  // Expo 기본 프리셋 사용
  };
};
