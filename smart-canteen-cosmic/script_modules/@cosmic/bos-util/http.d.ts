import { Map } from "../../@cosmic/bos-script/java/util";
interface HttpClientOptions {
    connectionTimeout(): number;
    connectionTimeout(millis: number): this;
    header(): Map;
    header(key: string, value: string): this;
    readTimeout(): number;
    readTimeout(millis: number): this;
}
interface HttpClientOptions_C {
    create(): HttpClientOptions;
}
export declare const HttpClientOptions: HttpClientOptions_C;
interface HttpClient {
    get(url: string, options?: HttpClientOptions): string;
    get(url: string, parameters: Map, options?: HttpClientOptions): string;
    post(url: string, parameters: Map, options?: HttpClientOptions): string;
    postJson(url: string, jsonStringOrObject: any, options?: HttpClientOptions): string;
}
export declare const HttpClient: HttpClient;
export {};
