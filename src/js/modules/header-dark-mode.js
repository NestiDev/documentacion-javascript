/*
	$darkModeIcon: contiene el elemento HTML con ID dark-mode-icon
    documentBody: almacena la seleccion hecha al elemento body
    keyDarkMode: alamacena el valor que retorna la consulta 
    hecha al localstorge
*/
let $darkModeIcon = document.querySelector("#dark-mode-icon"),
    documentBody = document.body,
    keyDarkMode = localStorage.getItem("darkmode");

/*
    ejecucion de la funcion darkMode
*/
let darkMode = function () {
    /*
		añadimos o removemos de body la clase js_dark_mode definida en
		./src/sass/style.scss
	*/
    documentBody.classList.toggle("js_dark_mode");

    /*
        containClassDarkMode: almacena true o false dependiendo si 
        el elemento body tiene o no la clase js_dark_mode
    */
    let containClassDarkMode = documentBody.classList.contains("js_dark_mode");

    /*
        definimos un condicional 
    */
    if (containClassDarkMode === true) {
        /*
            si la condicion se cumple almacenamos en el localStorage
            la clave darkmode con valor active
        */
        localStorage.setItem("darkmode", "active");
    } else {
        /*
            de lo contrario removemos del localStorage la clave
        */
        localStorage.removeItem("darkmode");
    }
};

/* 
	definimos un evento click en $darkModeIcon y declaramos una 
	funcion 
*/
$darkModeIcon.addEventListener("click", darkMode);

/*
    definimos un condicional 
*/
if (keyDarkMode === null) {
    /*
        si la condicion se cumple removemos del elemento body
        la clase js_dark_mode
    */
    documentBody.classList.remove("js_dark_mode");
} else {
    /*
        de lo contrario añadimos al elemento body
        la clase js_dark_mode
    */
    documentBody.classList.add("js_dark_mode");
}

/*
	exportacion de la funcion
*/
export { darkMode };
