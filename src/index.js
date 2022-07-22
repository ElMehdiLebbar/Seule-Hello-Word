import html from "./index.html";
import main from "./assets/css/main.css";
import css from "./assets/css/app.css";
import {map} from "./routing-map/map";

import {Instance} from "seule";
import {_Css} from "seule/model";
import {_Directives} from "seule/model";
import {Effects} from "seule/effects";

_Css(main);

new Instance({
    el: '#app',
    style: css,
    async handlers(root){
        Effects();

        const {Root} =  await import("seule/view");
        new Root("root-page", map);

        const {Home} = await import("./home-page/home");
        Home(root);

        const {About} = await import("./about-page/about");
        About(root);

        _Directives(root, map);

    }
})




