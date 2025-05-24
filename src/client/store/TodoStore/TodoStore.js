import { action, observable, makeAutoObservable } from "mobx";

export default class TodoStore {
    constructor(rootstore) {
        makeAutoObservable(this);
        this.rootstore = rootstore;
        console.log("**root**", this.rootstore);

    }
    @observable todos = [];
    @action setTodo(todos) {
        this.todos = todos;
    }

    @action addTodo(todo) {
        this.todos.push(todo);
    }
    @action deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        console.log(this.todos);
    }
    @action toggleComplete(id) {
        this.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            
        });
        console.log(this.todos);
    };
}

