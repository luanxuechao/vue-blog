const host = location.hostname

console.log('主机域名', host)
let URL = process.env.NODE_ENV == 'production'?'http://www.csails.cn:3001': 'http://localhost:3001'


export { URL }
