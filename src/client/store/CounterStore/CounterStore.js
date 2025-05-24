import { action, observable, makeAutoObservable } from "mobx";

export default class Counter {
    constructor(rootstore) {
        makeAutoObservable(this);
        this.rootstore = rootstore;
    }
    @observable count = 1;
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

