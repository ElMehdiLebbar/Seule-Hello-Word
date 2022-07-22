import html from "./home.html";
import css from "./home.css";
import {View} from "seule/view";


export const Home = (root)=> new View({
    el: 'home-page',
    template: html,
    style: css,
    data:{},
    async handlers(app){
        const {Colors} = await import("../functions/animations");
        new Colors().darkMode();
    }
})