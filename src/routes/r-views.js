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
router.get("/objetos-declaraciones", (req, res) => {
    res.render("pages/objetos-declaraciones", {
        title: "objetos declaraciones",
    });
});

router.get("/objetos-operaciones", (req, res) => {
    res.render("pages/objetos-operaciones", {
        title: "objetos operaciones",
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

router.get("/objetos-consola", (req, res) => {
    res.render("pages/objetos-consola", {
        title: "objetos consola",
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
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
