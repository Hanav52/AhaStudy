export function test() {
    async.get('naver/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC')
         .then(data => {
           console.log(data.data)
         })
  }