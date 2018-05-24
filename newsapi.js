let container = document.querySelector('.container')

function getNews(newsToDisplay) {
  newsToDisplay.articles.forEach(function(index){

  let article = `
                  <div class="individualNews">
                  <h3 class="title">${index.title}</h3>
                  <p class="author">by ${index.author}</p>
                  <div class ="content">
                    <img class="imageURL" src=${index.urlToImage}>
                  <div class="articleInfo">
                    <p class="description">${index.description}</p>
                    <a class="url" href=${index.url}>Click for more</a>
                    <p class="publishedAt">${new Date(index.publishedAt)}</p>
                  </div>
                  </div>
                  </div>
                  <div>
                  <hr/>
                  </div>`


  container.innerHTML += article

  })

}

getNews(news)
