import { hydrateCounterStore, dehydrateCounterStore } from "./CounterStore/CounterHydration";
import { dehydrateTodoStore, hydrateTodoStore } from "./TodoStore/TodoHydration";

export function hydrateRootStore(rootStore) {
    hydrateTodoStore(rootStore);
    hydrateCounterStore(rootStore);
}

export function dehydrateRootStore(rootStore) {
    return {
        todoStore: dehydrateTodoStore(rootStore),
        counterStore: dehydrateCounterStore(rootStore)
    }
    
}

export default { hydrateRootStore, dehydrateRootStore }