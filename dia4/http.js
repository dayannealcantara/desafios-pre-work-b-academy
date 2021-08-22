const request = (url, options) => 
    fetch(url, options)
      .then(r => r.json())
      .catch(e => ({ error: true, message: e.massage }))

 export const get = (url) => request(url)
 export const post = (url, data) => request(url, {
     method: 'POST',
     headers: {
         'content-type': 'application/json',
     },
 })
   export const del = () => {} 