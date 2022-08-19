import {Component} from "seule/component"

export const list_component = ()=> new Component({
    el:"list-component",
    extend:"ul",
    data:[
            {label: "awesome"},
            {label: "good"}
        ],
    template(message){
        return `<li>Woah! That's ${message.label}!</li>`
    }
})