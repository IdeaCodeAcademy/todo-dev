import {Component} from "@odoo/owl";
import {useTodoStore} from "../todo_list/todo.js";

export class TodoItem extends Component {
    static template = "TodoItem";
    static components = {};
    static props = {
        todo: {id: Number, name: String, isComplete: Boolean},
        // toggleTodo: Function,
        // deleteTask: Function,
    }

    setup(){
        this.store = useTodoStore();
    }
}
