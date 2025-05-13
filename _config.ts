import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
    src: "./src",
    cssFile: "/css/estilo.css",
    jsFile: "/js/script.js",
});

site.use( sass() );
site.add("/css/estilo.scss");

export default site;
