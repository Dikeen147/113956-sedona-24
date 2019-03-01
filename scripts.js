// ПОКАЗАТЬ ФОРМУ ПОИСКА ГОСТИНИЦЫ

var searchHostelBtn = document.querySelector(".search-hostel-btn"); // кнопка поиска гостиницы
var btnClose = document.querySelector(".btn-close-none"); // див поверх кнопки посика, чтобы закрыть

var popup = document.querySelector(".search-hostel");
var form = document.querySelector(".search-hostel");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");

var isStorageSupport = true;
var storage = "";
var bool = true;
	
try {
	storage = localStorage.getItem("arrival");
} catch (err) {
	isStorageSupport = false;
}

form.addEventListener("submit", function(evt) {
	if (!arrival.value || !departure.value) {
		evt.preventDefault();
		if (popup.classList.contains("visually-show")) {
			if (!arrival.value) {
				arrival.classList.remove("arrival-input");
				arrival.offsetWidth = arrival.offsetWidth;
				arrival.classList.add("arrival-input");
			}
			if (!departure.value) {
				departure.classList.remove("arrival-input");
				departure.offsetWidth = departure.offsetWidth;
				departure.classList.add("arrival-input");
			}	
		}
		popup.classList.remove("clear-field");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("clear-field");
		console.log("Заполните пустые поля");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("departure", departure.value);
			localStorage.setItem("arrival", arrival.value);
		}
	}
});

// Открыть форму поиска гостиницы
searchHostelBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	// Если элемент содержит класс закрытия формы ( перед открытием ), то удалить
	if (popup.classList.contains("visually-close")) {
		popup.classList.remove("visually-close");
	}
	popup.classList.add("visually-show");
	btnClose.classList.add("btn-close-block");	
	arrival.focus();

	if (storage) {
		arrival.value = storage;
		departure.focus();
	} else {
		arrival.focus();
	}
});

// Закрытие формы поиска гостиницы
btnClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("visually-show");
	popup.classList.remove("clear-field");
	btnClose.classList.remove("btn-close-block");
	popup.classList.add("visually-close");
});

// закрытие формы по нажатию клашиви ECS
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27 ) {
		if (popup.classList.contains("visually-show")) {
			evt.preventDefault();
			popup.classList.remove("visually-show");
			popup.classList.remove("clear-field");
			btnClose.classList.remove("btn-close-block");
			popup.classList.add("visually-close");
		}
	}
});

/****************************************************************************/
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

minus1.addEventListener("click", function() {
	if (inputAdultsCount > 1) {
		inputAdults.value = inputAdultsCount - 1;
	}
	inputAdultsCount = parseInt(inputAdults.value);
});

plus1.addEventListener("click", function() {
	if (inputAdultsCount < 100) {
		inputAdults.value = inputAdultsCount + 1;
	}
	inputAdultsCount = parseInt(inputAdults.value);
});

minus2.addEventListener("click", function() {
	if (inputChildrenCount > 0) {
		inputChildren.value = inputChildrenCount - 1;
	}
	inputChildrenCount = parseInt(inputChildren.value);
});
plus2.addEventListener("click", function() {
	if (inputChildrenCount < 100) {
		inputChildren.value = inputChildrenCount + 1;
	}
	inputChildrenCount = parseInt(inputChildren.value);
});