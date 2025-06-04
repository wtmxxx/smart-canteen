export declare interface Engine {
    getDebugOptions(): DebugOptions;
    getModuleNames(): string[];
    getModule(name: string): LibModule;
    getEnginePool(): EnginePool;
}
export declare const Engine: Engine;
export declare interface LibModule {
    getVersion(): string;
    getName(): string;
    getModuleTypes(): string[];
}
export declare interface DebugOptions {
    isEnabled(): boolean;
    getPort(): number;
}
export declare interface EnginePool {
    getName(): string;
    getInitSize(): number;
    getMaxSize(): number;
    getTotalSize(): number;
    getActiveSize(): number;
    getFreeSize(): number;
}
