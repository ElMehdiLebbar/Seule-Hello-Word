import {Hoisting} from "seule/selectors";


export class Colors{
    constructor() {
        this.doc = Hoisting(':root');
    }

    darkMode(){
        this.doc.Property("--text-color").set = "#fff";
        this.doc.Property("--background").set = "#222";
    }

    lightMode(){
        this.doc.Property("--text-color").set = "#222";
        this.doc.Property("--background").set = "#fff"
    }
}



