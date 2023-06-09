/* 
	$showHiddenModal: almacena el elemento html con el ID show-modal
	$closeHiddenModal: almacena el elemento html con el ID show-hidden-modal
*/
let $showModal = document.querySelector("#show-modal"),
    $hiddenModal = document.querySelector("#hidden-modal");

/*
    ejecucion de la funcion sectionsShowModal
*/
let sectionsShowModal = () => {
    /* 
		seleccionamos $hiddenModal y le añadimos la
		clase js_show_hidden_modal definida en la
		hoja d eestilos
	*/
    $hiddenModal.classList.add("js_show_hidden_modal");
};

/*
    ejecucion de la funcion sectionsHiddenModal
*/
let sectionsHiddenModal = () => {
    /* 
		seleccionamos $hiddenModal y le removemos la
		clase js_show_hidden_modal definida en la
		hoja d eestilos
	*/
    $hiddenModal.classList.remove("js_show_hidden_modal");
};

/* 
	añadimos un evento click en la variable showModal
	y $hiddenModal 
*/
$showModal.addEventListener("click", sectionsShowModal);
$hiddenModal.addEventListener("click", sectionsHiddenModal);

/*
	exportacion de la funcion
*/
export { sectionsShowModal, sectionsHiddenModal };
