import {Component, useState, useSubEnv} from "@odoo/owl";
import {Navbar} from "./components/navbar/navbar.js";
import {TodoList} from "./components/todo_list/todo_list.js";
import {SaleOrder} from "./components/sale_order/sale_order.js";
import {createTodoStore} from "./components/todo_list/todo.js";

export class Root extends Component {
    static template = "Root";
    static components = {Navbar, TodoList, SaleOrder};

    setup() {

        this.apps = [
            {id: 1, name: "Todo", component: TodoList},
            {id: 2, name: "Sale Order", component: SaleOrder},
        ]
        // const todoStore = useState(new TodoStore());
        useSubEnv({store: createTodoStore()});
        this.state = useState({
            mainScreen: this.apps[0]
        })
    }

    switchScreen(app) {
        this.state.mainScreen = app;
    }

    getComponent() {
        return this.state.mainScreen.component;
    }
}
