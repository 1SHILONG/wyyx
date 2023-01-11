// 利用fastmock构造假数据  把完整的path前一部分绝对地址存储  
// 后一部分按需输入不同的接口的相对地址  方便管理
// export向外导出常量baseURL timeout   外部导入需要使用import {}
// export可以有多个 
export const baseURL = "https://www.fastmock.site/mock/17f9e297d39df995fac752c9c31aa121/api"
// 设置超时时间
export const timeout = 5000