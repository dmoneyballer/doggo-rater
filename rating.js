if(localStorage.getItem('rating') !== null) {
  let ratings = JSON.parse(localStorage.rating)
  for (var i = 1; i < ratings.length; i++) {
    let rating = ratings[i].rating
    let image = ratings[i].image
    $('.localStorage').append(`<div class="card card-custom mx-2 mb-3" style="width: 13rem;"><img src=${image}><h1>Rating: ${rating}</h1></div>`)
  }
}
$('.btn-danger').click(function () {
  localStorage.clear();
  $('.localStorage').html(`<h1>All ratings have been deleted.</h1>`)
})
