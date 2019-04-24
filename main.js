$(document).ready(function() {
  if (localStorage.getItem("rating") == null) {
    var a = [];
    a.push(JSON.parse(localStorage.getItem("session")));
    localStorage.setItem("rating", JSON.stringify(a));
  }
  function getDog() {
    $("#success").html(``);
    let url = `https://dog.ceo/api/breeds/image/random`;
    let breed = $("#breed")
      .val()
      .trim();
    if (breed !== "select one") {
      url = `https://dog.ceo/api/breed/${breed}/images/random`;
    }
    $.ajax({
      url: url,
      type: "GET",
      success: data => {
        $("#dogPic").html(`<img src="${data.message}" id="image">`);
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getDog();
  $("#doggo").click(function() {
    getDog();
  });

  $("#rating").click(function() {
    let image = $("#image")[0].src;
    let rating = $("#ratings").val();
    let storage = [];
    if (rating !== "select one") {
      storage = JSON.parse(localStorage.getItem("rating"));
      storage.push({ image: image, rating: rating });
      localStorage.setItem("rating", JSON.stringify(storage));
      $("#success").html(`<h1>Rating succesfully updated</h1>`);
    } else {
      $("#success").html(`<h1>You need to select a rating.</h1>`);
    }
  });
});
