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
router.get("/var-variable", (req, res) => {
	res.render("pages/var-variable", {
		title: "var variable",
	});
});

router.get("/let-variable", (req, res) => {
	res.render("pages/let-variable", {
		title: "let variable",
	});
});

router.get("/const-variable", (req, res) => {
	res.render("pages/const-variable", {
		title: "const variable",
	});
});

/* 
	______________________ funciones ______________________
*/
router.get("/declaradas-function", (req, res) => {
	res.render("pages/declaradas-function", {
		title: "declaradas function",
	});
});

router.get("/expresadas-function", (req, res) => {
	res.render("pages/expresadas-function", {
		title: "expresadas function",
	});
});

router.get("/callback-function", (req, res) => {
	res.render("pages/callback-function", {
		title: "callback function",
	});
});

router.get("/events-function", (req, res) => {
	res.render("pages/events-function", {
		title: "events function",
	});
});

router.get("/rest-operator-function", (req, res) => {
	res.render("pages/rest-operator-function", {
		title: "rest-operator function",
	});
});

/* 
	______________________ ciclos ______________________
*/
router.get("/while-ciclos", (req, res) => {
	res.render("pages/while-ciclos", {
		title: "while ciclos",
	});
});

router.get("/do-while-ciclos", (req, res) => {
	res.render("pages/do-while-ciclos", {
		title: "dowhile ciclos",
	});
});

router.get("/for-ciclos", (req, res) => {
	res.render("pages/for-ciclos", {
		title: "for ciclos",
	});
});

router.get("/for-of-ciclos", (req, res) => {
	res.render("pages/for-of-ciclos", {
		title: "forof ciclos",
	});
});

router.get("/for-in-ciclos", (req, res) => {
	res.render("pages/for-in-ciclos", {
		title: "forin ciclos",
	});
});

router.get("/for-each-ciclos", (req, res) => {
	res.render("pages/for-each-ciclos", {
		title: "foreach ciclos",
	});
});

router.get("/break-continue-ciclos", (req, res) => {
	res.render("pages/break-continue-ciclos", {
		title: "break - continue ciclos",
	});
});

/* 
	______________________ clases ______________________
*/
router.get("/estructura-clases", (req, res) => {
	res.render("pages/estructura-clases", {
		title: "estructura clases",
	});
});

router.get("/herencia-clases", (req, res) => {
	res.render("pages/herencia-clases", {
		title: "herencia clases",
	});
});

router.get("/consola-clases", (req, res) => {
	res.render("pages/consola-clases", {
		title: "consola clases",
	});
});

/* 
	______________________ objetos ______________________
*/
router.get("/declaraciones-objetos", (req, res) => {
	res.render("pages/declaraciones-objetos", {
		title: "declaraciones objetos",
	});
});

router.get("/operaciones-objetos", (req, res) => {
	res.render("pages/operaciones-objetos", {
		title: "operaciones objetos",
	});
});

router.get("/constructor-objetos", (req, res) => {
	res.render("pages/constructor-objetos", {
		title: "constructor objetos",
	});
});

router.get("/destructuracion-objetos", (req, res) => {
	res.render("pages/destructuracion-objetos", {
		title: "destructuracion objetos",
	});
});

router.get("/metodos-objetos", (req, res) => {
	res.render("pages/metodos-objetos", {
		title: "metodos objetos",
	});
});

router.get("/consola-objetos", (req, res) => {
	res.render("pages/consola-objetos", {
		title: "consola objetos",
	});
});

/* 
	______________________ condicionales ______________________
*/
router.get("/if-condicionales", (req, res) => {
	res.render("pages/if-condicionales", {
		title: "if condicionales",
	});
});

router.get("/if-anidado-condicionales", (req, res) => {
	res.render("pages/if-anidado-condicionales", {
		title: "if anidado condicionales",
	});
});

router.get("/else-if-condicionales", (req, res) => {
	res.render("pages/else-if-condicionales", {
		title: "elseif condicionales",
	});
});

router.get("/else-condicionales", (req, res) => {
	res.render("pages/else-condicionales", {
		title: "else condicionales",
	});
});

router.get("/ternario-condicionales", (req, res) => {
	res.render("pages/ternario-condicionales", {
		title: "ternario condicionales",
	});
});

router.get("/operador-&-condicionales", (req, res) => {
	res.render("pages/operador-&-condicionales", {
		title: "operador-& condicionales",
	});
});

router.get("/operador-O-condicionales", (req, res) => {
	res.render("pages/operador-O-condicionales", {
		title: "operador-O condicionales",
	});
});

router.get("/switch-case-condicionales", (req, res) => {
	res.render("pages/switch-case-condicionales", {
		title: "switch-case condicionales",
	});
});

router.get("/switch-default-condicionales", (req, res) => {
	res.render("pages/switch-default-condicionales", {
		title: "switch-default condicionales",
	});
});

router.get("/switch-pro-condicionales", (req, res) => {
	res.render("pages/switch-pro-condicionales", {
		title: "switch-pro condicionales",
	});
});

/* 
	______________________ string ______________________
*/
router.get("/generales-string", (req, res) => {
	res.render("pages/generales-string", {
		title: "generales properties",
	});
});

router.get("/slice-string", (req, res) => {
	res.render("pages/slice-string", {
		title: "slice properties",
	});
});

router.get("/replace-string", (req, res) => {
	res.render("pages/replace-string", {
		title: "replace properties",
	});
});

router.get("/includes-string", (req, res) => {
	res.render("pages/includes-string", {
		title: "includes properties",
	});
});

router.get("/index-string", (req, res) => {
	res.render("pages/index-string", {
		title: "index of properties",
	});
});

router.get("/match-string", (req, res) => {
	res.render("pages/match-string", {
		title: "match properties",
	});
});

router.get("/split-string", (req, res) => {
	res.render("pages/split-string", {
		title: "split properties",
	});
});

router.get("/search-string", (req, res) => {
	res.render("pages/search-string", {
		title: "search properties",
	});
});

router.get("/start-end-string", (req, res) => {
	res.render("pages/start-end-string", {
		title: "start-end properties",
	});
});

/* 
	______________________ glosario ______________________
*/
router.get("/glosario-javascript", (req, res) => {
	res.render("pages/glosario-javascript", {
		title: "glosario javascript",
	});
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
