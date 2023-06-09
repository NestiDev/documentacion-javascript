/* 
	$headerSearchIcon: contiene el elemento HTML con ID header-search-icon
	$searchInput: contiene el elemento HTML con ID earch-input
*/
let $headerSearchIcon = document.querySelector("#header-search-icon"),
    $searchInput = document.querySelector("#search-input");

/*
    ejecucion de la funcion headerSearch
*/
let headerSearch = function () {
    /*
		añadimos de $searchInput la clase js_input_hidden 
        definida en ./src/sass/style.scss
	*/
    $searchInput.classList.add("js_input_hidden");
};

/* 
	definimos un evento click en $headerSearchIcon y declaramos una 
	funcion 
*/
$headerSearchIcon.addEventListener("click", headerSearch);

/*
	exportacion de la funcion
*/
export { headerSearch };
