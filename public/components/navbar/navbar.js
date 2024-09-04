import {Component, useState} from "@odoo/owl";

export  class Navbar extends Component {
    static template = "navbar";

    setup(){
        this.store = useState(this.env.store);
    }
}