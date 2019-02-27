//alert("hello");

var searchHostelBtn = document.querySelector(".search-hostel-btn");
var popup = document.querySelector(".search-hostel");

searchHostelBtn.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.toggle("visually-show");
});