let globalData = {
  isHome: false,
  navLeft:0,
  navHeight:0,
  navTop:0,
  windowHeight:0,
  menuButtonObject:0,
}
exports.globalData = globalData

exports.setGlobalData = (isHome) => {
  module.exports.globalData = {
    ...module.exports.globalData,
    isHome: isHome
  }
}