import rootstore from "../index";

export function hydrateCounterStore(rootstore) {
    const { counterStore } = window.__INITIAL_STATE__;
    rootstore.counterStore.count = counterStore.count;
    rootstore.counterStore.setCount(counterStore.count); 
}

export function dehydrateCounterStore() {
    const { counterStore } = rootstore;
    const { count } = counterStore;
    return ({
        count
    });
}

export default { hydrateCounterStore, dehydrateCounterStore };