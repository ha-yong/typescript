// Genericsを使うことで、全てのタイプを使用できる。
// Tの代わりに他の文字を入れても構わない。
interface SStorage<T> {
    [key: string]: T;
}

class LocalStorage<T> {
    private storage:SStorage<T> ={}
    set(key:string, value:T){
        this.storage[key] = value
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T{
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()
stringsStorage.get("key")
stringsStorage.set("key", "value")
const boolenasStorage = new LocalStorage<boolean>()
boolenasStorage.get("key")
boolenasStorage.set("key", true)
