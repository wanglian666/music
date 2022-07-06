module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [    //  npm i babel-plugin-import -D       vant使用自动按需引入方式
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
