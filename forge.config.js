module.exports = {
  packagerConfig: {
    // icon: './icon.icns', // Mac
    icon: './icon.ico', // Windows
    ignore: [
      /^\/(node_modules|src|\.angular|\.idea|\.vscode|out|angular\.json|\.gitignore|\.editorconfig|package-lock\.json|forge\.config\.js|tailwind\.config\.js|tsconfig\.app\.js|tsconfig\.json|tsconfig\.spec\.json)/
    ]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
