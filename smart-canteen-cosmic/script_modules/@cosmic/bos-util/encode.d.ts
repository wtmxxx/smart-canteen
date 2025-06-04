interface Base64 {
    decode(src: string): Int8Array[];
    decode(src: Int8Array[]): Int8Array[];
    decodeToString(src: string): string;
    encode(src: Int8Array[]): Int8Array[];
    encode(src: string): Int8Array[];
    encodeToString(src: Int8Array[]): string;
    byteToString(bytes: Int8Array[]): string;
}
export declare const Base64: Base64;
export {};
