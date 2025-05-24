import CounterStore from "./CounterStore/CounterStore.js";
import TodoStore from "./TodoStore/TodoStore.js";

class RootStore {
    constructor() {
        this.counterStore = new CounterStore(this);
        this.todoStore = new TodoStore(this);
    }
}

const rootstore = new RootStore();

export default rootstore;
