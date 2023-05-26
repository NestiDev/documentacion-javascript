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
router.get("/variables-var", (req, res) => {
    res.render("pages/variables-var", {
        title: "variables var",
    });
});

router.get("/variables-let", (req, res) => {
    res.render("pages/variables-let", {
        title: "variables let",
    });
});

router.get("/variables-const", (req, res) => {
    res.render("pages/variables-const", {
        title: "variables const",
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

router.get("/condicionales-return", (req, res) => {
    res.render("pages/condicionales-return", {
        title: "condicionales return",
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
        title: "ciclos do-while",
    });
});

router.get("/ciclos-for", (req, res) => {
    res.render("pages/ciclos-for", {
        title: "ciclos for",
    });
});

router.get("/ciclos-for-of", (req, res) => {
    res.render("pages/ciclos-for-of", {
        title: "ciclos for-of",
    });
});

router.get("/ciclos-for-in", (req, res) => {
    res.render("pages/ciclos-for-in", {
        title: "ciclos for-in",
    });
});

router.get("/ciclos-forEach", (req, res) => {
    res.render("pages/ciclos-forEach", {
        title: "ciclos forEach",
    });
});

router.get("/ciclos-sentencias", (req, res) => {
    res.render("pages/ciclos-sentencias", {
        title: "ciclos sentencias",
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

router.get("/funciones-arrow", (req, res) => {
    res.render("pages/funciones-arrow", {
        title: "funciones arrow",
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

router.get("/funciones-return", (req, res) => {
    res.render("pages/funciones-return", {
        title: "funciones return",
    });
});

router.get("/funciones-operadores", (req, res) => {
    res.render("pages/funciones-operadores", {
        title: "funciones operadores",
    });
});

/* 
	______________________ clases ______________________
*/
router.get("/clases-declaracion", (req, res) => {
    res.render("pages/clases-declaracion", {
        title: "clases declaracion",
    });
});

router.get("/clases-manipulacion", (req, res) => {
    res.render("pages/clases-manipulacion", {
        title: "clases manipulacion",
    });
});

router.get("/clases-destructuring", (req, res) => {
    res.render("pages/clases-destructuring", {
        title: "clases destructuring",
    });
});

router.get("/clases-herencia", (req, res) => {
    res.render("pages/clases-herencia", {
        title: "clases herencia",
    });
});

router.get("/clases-metodos", (req, res) => {
    res.render("pages/clases-metodos", {
        title: "clases metodos",
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

router.get("/objetos-destructuring", (req, res) => {
    res.render("pages/objetos-destructuring", {
        title: "objetos destructuring",
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

router.get("/json-destructuring", (req, res) => {
    res.render("pages/json-destructuring", {
        title: "json destructuring",
    });
});

router.get("/json-metodos", (req, res) => {
    res.render("pages/json-metodos", {
        title: "json metodos",
    });
});

/* 
	______________________ promesas ______________________
*/
router.get("/promesas-declaracion", (req, res) => {
    res.render("pages/promesas-declaracion", {
        title: "promesas declaracion",
    });
});

router.get("/promesas-async-await", (req, res) => {
    res.render("pages/promesas-async-await", {
        title: "promesas async-await",
    });
});

router.get("/promesas-try-catch", (req, res) => {
    res.render("pages/promesas-try-catch", {
        title: "promesas try-catch",
    });
});

router.get("/promesas-throw-error", (req, res) => {
    res.render("pages/promesas-throw-error", {
        title: "promesas throw-error",
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
	______________________ numeros ______________________
*/
router.get("/numeros-generales", (req, res) => {
    res.render("pages/numeros-generales", {
        title: "numeros generales",
    });
});

router.get("/numeros-math", (req, res) => {
    res.render("pages/numeros-math", {
        title: "numeros math",
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

router.get("/dom-selectores", (req, res) => {
    res.render("pages/dom-selectores", {
        title: "DOM selectores",
    });
});

router.get("/dom-nodeChild", (req, res) => {
    res.render("pages/dom-nodeChild", {
        title: "DOM nodeChild",
    });
});

router.get("/dom-nodeSiblings", (req, res) => {
    res.render("pages/dom-nodeSiblings", {
        title: "DOM nodeSiblings",
    });
});

router.get("/dom-classList", (req, res) => {
    res.render("pages/dom-classList", {
        title: "DOM classList",
    });
});

router.get("/dom-attribute", (req, res) => {
    res.render("pages/dom-attribute", {
        title: "DOM attribute",
    });
});

router.get("/dom-style", (req, res) => {
    res.render("pages/dom-style", {
        title: "DOM style",
    });
});

router.get("/dom-listeners", (req, res) => {
    res.render("pages/dom-listeners", {
        title: "DOM listeners",
    });
});

router.get("/dom-event-e", (req, res) => {
    res.render("pages/dom-event-e", {
        title: "DOM event-e",
    });
});

router.get("/dom-formularios", (req, res) => {
    res.render("pages/dom-formularios", {
        title: "DOM formularios",
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

router.get("/localStorage-generales", (req, res) => {
    res.render("pages/localStorage-generales", {
        title: "localStorage generales",
    });
});

/* 
	______________________ Date ______________________
*/
router.get("/date", (req, res) => {
    res.render("pages/date", {
        title: "Date",
    });
});

/* 
	______________________ temporizadores ______________________
*/
router.get("/temporizadores-setTimeout", (req, res) => {
    res.render("pages/temporizadores-setTimeout", {
        title: "temporizadores setTimeout",
    });
});

router.get("/temporizadores-setInterval", (req, res) => {
    res.render("pages/temporizadores-setInterval", {
        title: "temporizadores setInterval",
    });
});

router.get("/temporizadores-clearInterval", (req, res) => {
    res.render("pages/temporizadores-clearInterval", {
        title: "temporizadores clearInterval",
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
