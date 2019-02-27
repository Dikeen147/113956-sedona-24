//alert("hello");

// ПОКАЗАТЬ ФОРМУ ПОИСКА ГОСТИНИЦЫ
var searchHostelBtn = document.querySelector(".search-hostel-btn");
var popup = document.querySelector(".search-hostel");

var arrival = popup.querySelector("[name=arrival]");
var bool = true;
	
searchHostelBtn.addEventListener("click", function(evt){
	/*popup.classList.remove("visually-show2");*/
	
	if (popup.classList.contains("visually-close")) {
		evt.preventDefault();
		popup.classList.remove("visually-close");
	}
	if (popup.classList.contains("visually-show")) {
			evt.preventDefault();
			popup.classList.remove("visually-show");
			popup.classList.add("visually-close");
	} else {
		evt.preventDefault();
		popup.classList.add("visually-show");	
		arrival.focus();
	}
	
});
window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27 ) {
		if (popup.classList.contains("visually-show")) {
			evt.preventDefault();
			popup.classList.remove("visually-show");
			popup.classList.add("visually-close");
		}
	}
});


// В форме поиска гостиницы при нажатии минуса или плюса, убваляет либо прибавляет
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
	if (inputAdultsCount > 1) {
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