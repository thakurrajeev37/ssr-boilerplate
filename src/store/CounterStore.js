import { action, observable } from "mobx";

export default class Counter {
    constructor(rootstore) {
        this.rootstore = rootstore;
    }
    @observable count = 0;
    @action setCount(count) {
        this.count = count;
    }
    @action increment() {
        this.count++;
    }

    @action decrement() {
        this.count--;
    }

    get doubleCount() {
        return this.count * 2;
    }
}

