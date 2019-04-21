if(localStorage.getItem('rating') !== null) {
  let ratings = JSON.parse(localStorage.rating)
  for (var i = 1; i < ratings.length; i++) {
    let rating = ratings[i].rating
    let image = ratings[i].image
    $('.localStorage').append(`<img src=${image}><h1>${rating}</h1>`)
  }
}
