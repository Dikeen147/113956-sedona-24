var searchHostelBtn=document.querySelector(".search-hostel-btn"),btnClose=document.querySelector(".btn-close-none"),popup=document.querySelector(".search-hostel"),form=document.querySelector(".search-hostel"),arrival=popup.querySelector("[name=arrival]"),departure=popup.querySelector("[name=departure]"),isStorageSupport=!0,storage="",bool=!0;try{storage=localStorage.getItem("arrival")}catch(e){isStorageSupport=!1}form.addEventListener("submit",function(e){arrival.value&&departure.value?isStorageSupport&&(localStorage.setItem("departure",departure.value),localStorage.setItem("arrival",arrival.value)):(e.preventDefault(),popup.classList.contains("visually-show")&&(arrival.value||(arrival.classList.remove("arrival-input"),arrival.offsetWidth=arrival.offsetWidth,arrival.classList.add("arrival-input")),departure.value||(departure.classList.remove("arrival-input"),departure.offsetWidth=departure.offsetWidth,departure.classList.add("arrival-input"))),popup.classList.remove("clear-field"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("clear-field"),console.log("Заполните пустые поля"))}),searchHostelBtn.addEventListener("click",function(e){e.preventDefault(),popup.classList.contains("visually-close")&&popup.classList.remove("visually-close"),popup.classList.add("visually-show"),btnClose.classList.add("btn-close-block"),arrival.focus(),storage?(arrival.value=storage,departure.focus()):arrival.focus()}),btnClose.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("visually-show"),popup.classList.remove("clear-field"),btnClose.classList.remove("btn-close-block"),popup.classList.add("visually-close")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("visually-show")&&(e.preventDefault(),popup.classList.remove("visually-show"),popup.classList.remove("clear-field"),btnClose.classList.remove("btn-close-block"),popup.classList.add("visually-close"))});var adultsInput=document.querySelector(".adults-input"),minus1=adultsInput.querySelector(".minus"),plus1=adultsInput.querySelector(".plus"),childrenInput=document.querySelector(".children-input"),minus2=childrenInput.querySelector(".minus"),plus2=childrenInput.querySelector(".plus"),inputAdults=document.querySelector(".inputAdults"),inputChildren=document.querySelector(".inputChildren"),inputAdultsCount=parseInt(inputAdults.value),inputChildrenCount=parseInt(inputChildren.value);minus1.addEventListener("click",function(){1<inputAdultsCount&&(inputAdults.value=inputAdultsCount-1),inputAdultsCount=parseInt(inputAdults.value)}),plus1.addEventListener("click",function(){inputAdultsCount<100&&(inputAdults.value=inputAdultsCount+1),inputAdultsCount=parseInt(inputAdults.value)}),minus2.addEventListener("click",function(){0<inputChildrenCount&&(inputChildren.value=inputChildrenCount-1),inputChildrenCount=parseInt(inputChildren.value)}),plus2.addEventListener("click",function(){inputChildrenCount<100&&(inputChildren.value=inputChildrenCount+1),inputChildrenCount=parseInt(inputChildren.value)});