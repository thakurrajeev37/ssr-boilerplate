import rootstore from "../index";

export function hydrateTodoStore(rootstore) {
    const { todoStore } = window.__INITIAL_STATE__;
    rootstore.todoStore.todos = todoStore.todos;
    rootstore.todoStore.setTodo(todoStore.todos); 
}

export function dehydrateTodoStore() {
    const { todoStore } = rootstore;
    const { todos } = todoStore;
    return ({
        todos
    });
}

export default { hydrateTodoStore, dehydrateTodoStore };