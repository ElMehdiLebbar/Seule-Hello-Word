import html from "./about.html"
import css from "./about.css"
import {View} from "seule/view"

export const About = (root)=> new View({
    el: 'about-page',
    template: html,
    style: css,
    data:{},
    async handlers(app){
        const {Colors} = await import("../functions/animations");
        new Colors().lightMode();
    }
})