import CounterStore from "./CounterStore.js";

class RootStore {
    constructor() {
        this.counterStore = new CounterStore(this);
    }
}

const rootstore = new RootStore();

export default rootstore;
