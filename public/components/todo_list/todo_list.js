import {Component, useState} from "@odoo/owl";
import {TodoItem} from "../todo_item/todo_item.js";
import {useTodoStore} from "./todo.js";

export class TodoList extends Component {
    static template = "TodoList";
    static components = {TodoItem};

    setup() {
        this.nextId = 5;
        this.state = useState({
            todos: []
        });
        this.store = useTodoStore()
            // useState(this.env.store);
    }

    addTask(e) {
        if (e.keyCode === 13 && e.target.value !== '') {
            console.log(e.target.value);
            this.store.addTodo(e.target.value,false);
            e.target.value = '';
            // this.state.todos.push({id: this.nextId++, name: e.target.value, isCompleted: false});
        }
    }

    // toggleTodo(todo) {
    //     this.store.toggleTodo(todo);
    // }
    //
    // deleteTask(task) {
    //    this.store.deleteTask(task)
    // }
}
