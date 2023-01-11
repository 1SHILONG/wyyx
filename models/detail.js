export class GoodsBaseInfo {
  constructor(itemInfo,  contents) {
    this.method = itemInfo.method
    this.concessions = itemInfo.concessions
    this.title = itemInfo.title
    this.actText = itemInfo.actText
    this.newPrice = itemInfo.newPrice
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.realPrice
    this.actSpecial = itemInfo.actSpecial
    this.reason = itemInfo.reason
    this.sales = itemInfo.sales
    this.brand = itemInfo.brand
    this.market = itemInfo.market
    this.contents = contents
  }
}