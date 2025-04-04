module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          // Add an alias for the config folder
          config: './config',
        },
      },
    ],
  ],
};
