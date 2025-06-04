interface LRUCache_C {
    new <K, V>(maxCacheSize: number): LRUCache<K, V>;
    new <K, V>(maxCacheSize: number, initialCapacity: number): LRUCache<K, V>;
}
interface LRUCache<K, V> {
    get(key: K): V;
    set(key: K, value: V): V;
    remove(key: K): V;
    containsKey(key: K): boolean;
    clear(): void;
    forEach<T>(callbackFn: (key: K, value: V) => void): void;
    forEach<T>(callbackFn: (key: K, value: V, thisArg: T) => void, thisArg: T): void;
    size(): number;
    isEmpty(): boolean;
}
export declare const LRUCache: LRUCache_C;
export {};
