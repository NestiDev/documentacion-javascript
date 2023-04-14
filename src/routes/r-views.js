/* 
	router: almacena el requerimiento de express().Router
*/
let router = require("express").Router();

/* 
	haciendo uso del metodo get(), definimos el endpoint 
	de acceso seguido de una funcion de flecha que captura
	el requermiento del usuario y retorna una respuesta
*/
router.get("/", (req, res) => {
    /* 
		con el metodo render() definimos que vista va a
		renderizarse una vez el usuarrio haga un requerimiento
		a este enpoint, finalmente por medio de un objeto 
		pasamos el nombre de la vista
	*/
    res.render("pages/index", {
        title: "home",
    });
});

/* 
	______________________ variables ______________________
*/
router.get("/variable-var", (req, res) => {
    res.render("pages/variable-var", {
        title: "variable var",
    });
});

router.get("/variable-let", (req, res) => {
    res.render("pages/variable-let", {
        title: "variable let",
    });
});

router.get("/variable-const", (req, res) => {
    res.render("pages/variable-const", {
        title: "variable const",
    });
});

/* 
	______________________ condicionales ______________________
*/
router.get("/condicionales-if-else", (req, res) => {
    res.render("pages/condicionales-if-else", {
        title: "condicionales if - else",
    });
});

router.get("/condicionales-switch", (req, res) => {
    res.render("pages/condicionales-switch", {
        title: "condicionales switch",
    });
});

router.get("/condicionales-operadores", (req, res) => {
    res.render("pages/condicionales-operadores", {
        title: "condicionales operadores",
    });
});

/* 
	______________________ ciclos ______________________
*/
router.get("/ciclos-while", (req, res) => {
    res.render("pages/ciclos-while", {
        title: "ciclos while",
    });
});

router.get("/ciclos-do-while", (req, res) => {
    res.render("pages/ciclos-do-while", {
        title: "ciclos dowhile",
    });
});

router.get("/ciclos-for", (req, res) => {
    res.render("pages/ciclos-for", {
        title: "ciclos for",
    });
});

router.get("/ciclos-for-of", (req, res) => {
    res.render("pages/ciclos-for-of", {
        title: "ciclos forof",
    });
});

router.get("/ciclos-for-in", (req, res) => {
    res.render("pages/ciclos-for-in", {
        title: "ciclos forin",
    });
});

router.get("/ciclos-forEach", (req, res) => {
    res.render("pages/ciclos-forEach", {
        title: "ciclos forEach",
    });
});

router.get("/ciclos-break-continue", (req, res) => {
    res.render("pages/ciclos-break-continue", {
        title: "ciclos break - continue",
    });
});

/* 
	______________________ funciones ______________________
*/
router.get("/funciones-declaradas", (req, res) => {
    res.render("pages/funciones-declaradas", {
        title: "funciones declaradas",
    });
});

router.get("/funciones-expresadas", (req, res) => {
    res.render("pages/funciones-expresadas", {
        title: "funciones expresadas",
    });
});

router.get("/funciones-callback", (req, res) => {
    res.render("pages/funciones-callback", {
        title: "funciones callback",
    });
});

router.get("/funciones-events", (req, res) => {
    res.render("pages/funciones-events", {
        title: "funciones events",
    });
});

router.get("/funciones-rest-operator", (req, res) => {
    res.render("pages/funciones-rest-operator", {
        title: "funciones rest-operator",
    });
});

/* 
	______________________ clases ______________________
*/
router.get("/clases-estructura", (req, res) => {
    res.render("pages/clases-estructura", {
        title: "clases estructura",
    });
});

router.get("/clases-herencia", (req, res) => {
    res.render("pages/clases-herencia", {
        title: "clases herencia",
    });
});

router.get("/clases-consola", (req, res) => {
    res.render("pages/clases-consola", {
        title: "clases consola",
    });
});

/* 
	______________________ objetos ______________________
*/
router.get("/objetos-declaracion", (req, res) => {
    res.render("pages/objetos-declaracion", {
        title: "objetos declaracion",
    });
});

router.get("/objetos-manipulacion", (req, res) => {
    res.render("pages/objetos-manipulacion", {
        title: "objetos manipulacion",
    });
});

router.get("/objetos-constructor", (req, res) => {
    res.render("pages/objetos-constructor", {
        title: "objetos constructor",
    });
});

router.get("/objetos-destructuracion", (req, res) => {
    res.render("pages/objetos-destructuracion", {
        title: "objetos destructuracion",
    });
});

router.get("/objetos-metodos", (req, res) => {
    res.render("pages/objetos-metodos", {
        title: "objetos metodos",
    });
});

/* 
	______________________ json ______________________
*/
router.get("/json-declaracion", (req, res) => {
    res.render("pages/json-declaracion", {
        title: "json declaracion",
    });
});

router.get("/json-manipulacion", (req, res) => {
    res.render("pages/json-manipulacion", {
        title: "json manipulacion",
    });
});

router.get("/json-metodos", (req, res) => {
    res.render("pages/json-metodos", {
        title: "json metodos",
    });
});

/* 
	______________________ try - catch ______________________
*/
router.get("/try-catch", (req, res) => {
    res.render("pages/try-catch", {
        title: "try-catch",
    });
});

/* 
	______________________ string ______________________
*/
router.get("/strings-generales", (req, res) => {
    res.render("pages/strings-generales", {
        title: "strings generales",
    });
});

router.get("/strings-slice", (req, res) => {
    res.render("pages/strings-slice", {
        title: "strings slice",
    });
});

router.get("/strings-replace", (req, res) => {
    res.render("pages/strings-replace", {
        title: "strings replace",
    });
});

router.get("/strings-includes", (req, res) => {
    res.render("pages/strings-includes", {
        title: "strings includes",
    });
});

router.get("/strings-index", (req, res) => {
    res.render("pages/strings-index", {
        title: "strings index of",
    });
});

router.get("/strings-match", (req, res) => {
    res.render("pages/strings-match", {
        title: "strings match",
    });
});

router.get("/strings-split", (req, res) => {
    res.render("pages/strings-split", {
        title: "strings split",
    });
});

router.get("/strings-search", (req, res) => {
    res.render("pages/strings-search", {
        title: "strings search",
    });
});

router.get("/strings-start-end", (req, res) => {
    res.render("pages/strings-start-end", {
        title: "strings start-end",
    });
});

/* 
	______________________ numbers ______________________
*/
router.get("/numbers-generales", (req, res) => {
    res.render("pages/numbers-generales", {
        title: "numbers generales",
    });
});

router.get("/numbers-math", (req, res) => {
    res.render("pages/numbers-math", {
        title: "numbers math",
    });
});

/* 
	______________________ DOM ______________________
*/
router.get("/dom-window", (req, res) => {
    res.render("pages/dom-window", {
        title: "DOM window",
    });
});

router.get("/dom-document", (req, res) => {
    res.render("pages/dom-document", {
        title: "DOM document",
    });
});

/* 
	______________________ localStorage ______________________
*/
router.get("/localStorage-setItem", (req, res) => {
    res.render("pages/localStorage-setItem", {
        title: "localStorage setItem",
    });
});

router.get("/localStorage-getItem", (req, res) => {
    res.render("pages/localStorage-getItem", {
        title: "localStorage getItem",
    });
});

router.get("/localStorage-removeItem", (req, res) => {
    res.render("pages/localStorage-removeItem", {
        title: "localStorage removeItem",
    });
});

router.get("/localStorage-clear", (req, res) => {
    res.render("pages/localStorage-clear", {
        title: "localStorage clear",
    });
});

router.get("/localStorage-propiedades", (req, res) => {
    res.render("pages/localStorage-propiedades", {
        title: "localStorage propiedades",
    });
});

/* 
	______________________ new date ______________________
*/
router.get("/new-date", (req, res) => {
    res.render("pages/new-date", {
        title: "new Date",
    });
});

/* 
	______________________ temporizadores ______________________
*/
router.get("/temporizadores", (req, res) => {
    res.render("pages/temporizadores", {
        title: "temporizadores",
    });
});

/* 
	______________________ regexp ______________________
*/
router.get("/regexp-flags", (req, res) => {
    res.render("pages/regexp-flags", {
        title: "regexp flags",
    });
});

router.get("/regexp-indicadores", (req, res) => {
    res.render("pages/regexp-indicadores", {
        title: "regexp indicadores",
    });
});

router.get("/regexp-metodos", (req, res) => {
    res.render("pages/regexp-metodos", {
        title: "regexp metodos",
    });
});

router.get("/regexp-patrones", (req, res) => {
    res.render("pages/regexp-patrones", {
        title: "regexp patrones",
    });
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
