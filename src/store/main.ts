import {reactive} from 'vue';


export abstract class Store<T extends object> {
    protected state: T;


    constructor(readonly storeName: string) {
        const data = this.data();
        this.state = reactive(data) as T;
    }

    protected abstract data(): T

    public getState(): T {
        return (this.state) as T
    }
}
