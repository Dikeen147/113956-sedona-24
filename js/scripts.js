//alert("hello");

var searchHostelBtn = document.querySelector(".search-hostel-btn");
var popup = document.querySelector(".search-hostel");

searchHostelBtn.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.toggle("visually-show");
});

/*****   Search-hostel minus and plus click count++   ******/

var adultsInput = document.querySelector(".adults-input");
var minus1 = adultsInput.querySelector(".minus");
var plus1 = adultsInput.querySelector(".plus");

var childrenInput = document.querySelector(".children-input");
var minus2 = childrenInput.querySelector(".minus");
var plus2 = childrenInput.querySelector(".plus");

var inputAdults = document.querySelector(".inputAdults");
var inputChildren = document.querySelector(".inputChildren");

var inputAdultsCount = parseInt(inputAdults.value);
var inputChildrenCount = parseInt(inputChildren.value);

minus1.addEventListener("click", function(){
	if (inputAdultsCount > 0) {
		inputAdults.value = inputAdultsCount - 1;
	}
	inputAdultsCount = parseInt(inputAdults.value);
});
plus1.addEventListener("click", function(){
	if (inputAdultsCount < 100) {
		inputAdults.value = inputAdultsCount + 1;
	}
	inputAdultsCount = parseInt(inputAdults.value);
});
minus2.addEventListener("click", function(){
	if (inputChildrenCount > 0) {
		inputChildren.value = inputChildrenCount - 1;
	}
	inputChildrenCount = parseInt(inputChildren.value);
});
plus2.addEventListener("click", function(){
	if (inputChildrenCount < 100) {
		inputChildren.value = inputChildrenCount + 1;
	}
	inputChildrenCount = parseInt(inputChildren.value);
});