import {reactive, useEnv, useState} from "@odoo/owl";

class TodoStore {
    nextId = 3;
    todos = [];

    addTodo(name, isCompleted) {
        this.todos.push({id: this.nextId++, name, isCompleted})
    }

    toggleTodo(todo) {
        const oldTodo = this.todos.find((task) => task.id === todo.id);
        oldTodo.isCompleted = !oldTodo.isCompleted;
    }

    deleteTask(task) {
        const todoIndex = this.todos.findIndex((item) => item.id === task.id)
        if (todoIndex >= 0) {
            this.todos.splice(todoIndex, 1);
        }
    }
}


export function createTodoStore() {
    return reactive(new TodoStore());
}

export function useTodoStore() {
    const env = useEnv();
    return useState(env.store);
}
