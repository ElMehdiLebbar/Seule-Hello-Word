import html from "./index.html";
import main from "./assets/css/main.css";
import css from "./assets/css/app.css";
import {map} from "./routing-map/map";

import {Instance} from "seule";
import {Effects} from "seule/effects";
import {Events} from "seule/events"


new Instance({
    el: '#app',
    data:{
        message:"Hello World"
    },
    style: css,
    css:{
        main
    },
    routes:map,
    modules:{
        Effects,
        Events
    },
    views:{
        Home: import("./home-page/home"),
        About: import("./about-page/about")
    },
    components:{
        list_component: import("./components/list-component")
    },
    async handlers($el){
        console.log("Hello World")
    }
});




