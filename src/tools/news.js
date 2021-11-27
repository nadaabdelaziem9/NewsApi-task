const request = require('request')

// const news = (apiKey,callback)=> {
//     const newsUrl = 'https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey='+ apiKey
//     request({ url: newsUrl, json: true }, (error, response) => {
//     if (error) {
//        callback('error has occurred',undefined)
//     }
//     else {
//         callback(undefined,{
//             title: response.body.articles[0].title,
//             text: response.body.articles[0].description,
//             src: response.body.articles[0].urlToImage
//        }) 
//     }
// })
// }

const news = (callback)=> {
    
    const newsUrl = 'https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=0e5edd588b6e4b0e8fe3a10ab42da498'
    request({ url: newsUrl, json: true }, (error, response) => {
   
    if (error) {
       callback('error has occurred',undefined)
    }
    else {
        callback(undefined,response.body.articles) 
    }
})
}

module.exports = news

