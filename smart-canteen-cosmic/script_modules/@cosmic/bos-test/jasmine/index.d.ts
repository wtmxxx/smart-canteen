declare type ImplementationCallback = jasmine.ImplementationCallback;
declare function describe(description: string, specDefinitions: () => void): void;
declare function fdescribe(description: string, specDefinitions: () => void): void;
declare function xdescribe(description: string, specDefinitions: () => void): void;
declare function it(expectation: string, assertion?: jasmine.ImplementationCallback, timeout?: number): void;
declare function fit(expectation: string, assertion?: jasmine.ImplementationCallback, timeout?: number): void;
declare function xit(expectation: string, assertion?: jasmine.ImplementationCallback, timeout?: number): void;
declare function pending(reason?: string): void;
declare function setSpecProperty(key: string, value: unknown): void;
declare function setSuiteProperty(key: string, value: unknown): void;
declare function beforeEach(action: jasmine.ImplementationCallback, timeout?: number): void;
declare function afterEach(action: jasmine.ImplementationCallback, timeout?: number): void;
declare function beforeAll(action: jasmine.ImplementationCallback, timeout?: number): void;
declare function afterAll(action: jasmine.ImplementationCallback, timeout?: number): void;
declare function expect<T extends jasmine.Func>(spy: T | jasmine.Spy<T>): jasmine.FunctionMatchers<T>;
declare function expect<T>(actual: ArrayLike<T>): jasmine.ArrayLikeMatchers<T>;
declare function expect<T>(actual: T): jasmine.Matchers<T>;
declare function expect(): jasmine.NothingMatcher;
declare function expectAsync<T, U>(actual: T | PromiseLike<T>): jasmine.AsyncMatchers<T, U>;
declare function fail(e?: any): void;
interface DoneFn extends Function {
    (): void;
    fail: (message?: Error | string) => void;
}
declare function spyOn<T, K extends keyof T = keyof T>(object: T, method: T[K] extends Function ? K : never): jasmine.Spy<T[K] extends jasmine.Func ? T[K] : T[K] extends {
    new (...args: infer A): infer V;
} ? (...args: A) => V : never>;
declare function spyOnProperty<T, K extends keyof T = keyof T>(object: T, property: K, accessType?: "get"): jasmine.Spy<(this: T) => T[K]>;
declare function spyOnProperty<T, K extends keyof T = keyof T>(object: T, property: K, accessType: "set"): jasmine.Spy<(this: T, value: T[K]) => void>;
declare function spyOnAllFunctions<T>(object: T, includeNonEnumerable?: boolean): jasmine.SpyObj<T>;
declare namespace jasmine {
    type Func = (...args: any[]) => any;
    type Constructor = Function & {
        prototype: any;
    };
    type ImplementationCallback = (() => PromiseLike<any>) | (() => void) | ((done: DoneFn) => void);
    type ExpectedRecursive<T> = T | ObjectContaining<T> | AsymmetricMatcher<any> | {
        [K in keyof T]: ExpectedRecursive<T[K]> | Any;
    };
    type Expected<T> = T | ObjectContaining<T> | AsymmetricMatcher<any> | Any | Spy | {
        [K in keyof T]: ExpectedRecursive<T[K]>;
    };
    type SpyObjMethodNames<T = undefined> = T extends undefined ? ReadonlyArray<string> | {
        [methodName: string]: any;
    } : (ReadonlyArray<keyof T> | {
        [P in keyof T]?: T[P] extends Func ? (ReturnType<T[P]> | (P extends keyof Object ? Object[P] : never)) : any;
    });
    type SpyObjPropertyNames<T = undefined> = T extends undefined ? ReadonlyArray<string> | {
        [propertyName: string]: any;
    } : ReadonlyArray<keyof T> | {
        [P in keyof T]?: T[P];
    };
    interface Configuration {
        random?: boolean | undefined;
        seed?: number | string | null | undefined;
        stopOnSpecFailure?: boolean | undefined;
        failSpecWithNoExpectations?: boolean | undefined;
        stopSpecOnExpectationFailure?: boolean | undefined;
        specFilter?: SpecFilter | undefined;
        hideDisabled?: boolean | undefined;
        Promise?: typeof Promise | undefined;
        autoCleanClosures?: boolean | undefined;
    }
    type EnvConfiguration = Configuration;
    function clock(): Clock;
    function DiffBuilder(): DiffBuilder;
    function any(aclass: Constructor | Symbol): AsymmetricMatcher<any>;
    function anything(): AsymmetricMatcher<any>;
    function truthy(): AsymmetricMatcher<any>;
    function falsy(): AsymmetricMatcher<any>;
    function empty(): AsymmetricMatcher<any>;
    function notEmpty(): AsymmetricMatcher<any>;
    function arrayContaining<T>(sample: ArrayLike<T>): ArrayContaining<T>;
    function arrayWithExactContents<T>(sample: ArrayLike<T>): ArrayContaining<T>;
    function objectContaining<T>(sample: {
        [K in keyof T]?: ExpectedRecursive<T[K]>;
    }): ObjectContaining<T>;
    function mapContaining<K, V>(sample: Map<K, V>): AsymmetricMatcher<Map<K, V>>;
    function setContaining<T>(sample: Set<T>): AsymmetricMatcher<Set<T>>;
    function setDefaultSpyStrategy<Fn extends Func = Func>(fn?: (and: SpyAnd<Fn>) => void): void;
    function spyOnGlobalErrorsAsync(fn?: (globalErrorSpy: Error) => Promise<void>): Promise<void>;
    function addSpyStrategy<Fn extends Func = Func>(name: string, factory: Fn): void;
    function createSpy<Fn extends Func>(name?: string, originalFn?: Fn): Spy<Fn>;
    function createSpyObj(baseName: string, methodNames: SpyObjMethodNames, propertyNames?: SpyObjPropertyNames): any;
    function createSpyObj<T>(baseName: string, methodNames: SpyObjMethodNames<T>, propertyNames?: SpyObjPropertyNames<T>): SpyObj<T>;
    function createSpyObj(methodNames: SpyObjMethodNames, propertyNames?: SpyObjPropertyNames): any;
    function createSpyObj<T>(methodNames: SpyObjMethodNames<T>, propertyNames?: SpyObjPropertyNames<T>): SpyObj<T>;
    function getEnv(): Env;
    function debugLog(msg: string): void;
    function addCustomEqualityTester(equalityTester: CustomEqualityTester): void;
    function addCustomObjectFormatter(formatter: CustomObjectFormatter): void;
    function addMatchers(matchers: CustomMatcherFactories): void;
    function addAsyncMatchers(matchers: CustomAsyncMatcherFactories): void;
    function stringMatching(str: string | RegExp): AsymmetricMatcher<string>;
    function stringContaining(str: string | RegExp): AsymmetricMatcher<string>;
    function formatErrorMsg(domain: string, usage: string): (msg: string) => string;
    interface Any extends AsymmetricMatcher<any> {
        new (expectedClass: any): any;
        jasmineToString(prettyPrint: (value: any) => string): string;
    }
    interface AsymmetricMatcher<TValue> {
        asymmetricMatch(other: TValue, matchersUtil?: MatchersUtil): boolean;
        jasmineToString?(prettyPrint: (value: any) => string): string;
    }
    interface ArrayLike<T> {
        length: number;
        [n: number]: T;
    }
    interface ArrayContaining<T> extends AsymmetricMatcher<any> {
        new?(sample: ArrayLike<T>): ArrayLike<T>;
        jasmineToString(prettyPrint: (value: any) => string): string;
    }
    interface ObjectContaining<T> extends AsymmetricMatcher<T> {
        new?(sample: {
            [K in keyof T]?: any;
        }): {
            [K in keyof T]?: any;
        };
        jasmineToString?(prettyPrint: (value: any) => string): string;
    }
    interface Clock {
        install(): Clock;
        uninstall(): void;
        tick(ms: number): void;
        mockDate(date?: Date): void;
        withMock(func: () => void): void;
    }
    type CustomEqualityTester = (first: any, second: any) => boolean | void;
    type CustomObjectFormatter = (value: unknown) => string | undefined;
    interface CustomMatcher {
        compare<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
        compare(actual: any, ...expected: any[]): CustomMatcherResult;
        negativeCompare?<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
        negativeCompare?(actual: any, ...expected: any[]): CustomMatcherResult;
    }
    interface CustomAsyncMatcher {
        compare<T>(actual: T, expected: T, ...args: any[]): PromiseLike<CustomMatcherResult>;
        compare(actual: any, ...expected: any[]): PromiseLike<CustomMatcherResult>;
        negativeCompare?<T>(actual: T, expected: T, ...args: any[]): PromiseLike<CustomMatcherResult>;
        negativeCompare?(actual: any, ...expected: any[]): PromiseLike<CustomMatcherResult>;
    }
    type CustomMatcherFactory = (util: MatchersUtil) => CustomMatcher;
    type CustomAsyncMatcherFactory = (util: MatchersUtil) => CustomAsyncMatcher;
    interface CustomMatcherFactories {
        [name: string]: CustomMatcherFactory;
    }
    interface CustomAsyncMatcherFactories {
        [name: string]: CustomAsyncMatcherFactory;
    }
    interface CustomMatcherResult {
        pass: boolean;
        message?: string | undefined;
    }
    interface DiffBuilder {
        setRoots(actual: any, expected: any): void;
        recordMismatch(formatter?: (actual: any, expected: any, path?: any, prettyPrinter?: any) => string): void;
        withPath(pathComponent: string, block: () => void): void;
        getMessage(): string;
    }
    interface MatchersUtil {
        equals(a: any, b: any): boolean;
        contains<T>(haystack: ArrayLike<T> | string, needle: any): boolean;
        buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: any[]): string;
        pp(value: any): string;
    }
    interface Env {
        addReporter(reporter: CustomReporter): void;
        allowRespy(allow: boolean): void;
        clearReporters(): void;
        configuration(): Configuration;
        configure(configuration: Configuration): void;
        execute(runnablesToRun: Suite[] | null | undefined, onComplete: Func): void;
        execute(runnablesToRun?: Suite[]): PromiseLike<JasmineDoneInfo>;
        provideFallbackReporter(reporter: CustomReporter): void;
        setSpecProperty: typeof setSpecProperty;
        setSuiteProperty: typeof setSuiteProperty;
        topSuite(): Suite;
    }
    interface HtmlReporter {
        new (): any;
    }
    interface HtmlSpecFilter {
        new (): any;
    }
    interface Result {
        type: string;
    }
    interface ExpectationResult extends Result {
        matcherName: string;
        message: string;
        stack: string;
        passed: boolean;
        expected: any;
        actual: any;
    }
    interface DeprecationWarning extends Result {
        message: string;
        stack: string;
    }
    interface Order {
        new (options: {
            random: boolean;
            seed: number | string;
        }): any;
        random: boolean;
        seed: number | string;
        sort<T>(items: T[]): T[];
    }
    namespace errors {
        class ExpectationFailed extends Error {
            constructor();
            stack: any;
        }
    }
    interface Matchers<T> {
        toBe(expected: Expected<T>): void;
        toBe(expected: Expected<T>, expectationFailOutput: any): void;
        toEqual(expected: Expected<T>): void;
        toEqual(expected: Expected<T>, expectationFailOutput: any): void;
        toMatch(expected: string | RegExp): void;
        toMatch(expected: string | RegExp, expectationFailOutput: any): void;
        toBeDefined(): void;
        toBeDefined(expectationFailOutput: any): void;
        toBeUndefined(): void;
        toBeUndefined(expectationFailOutput: any): void;
        toBeNull(): void;
        toBeNull(expectationFailOutput: any): void;
        toBeNaN(): void;
        toBeTruthy(): void;
        toBeTruthy(expectationFailOutput: any): void;
        toBeFalsy(): void;
        toBeFalsy(expectationFailOutput: any): void;
        toBeTrue(): void;
        toBeFalse(): void;
        toHaveBeenCalled(): void;
        toHaveBeenCalledBefore(expected: Func): void;
        toHaveBeenCalledWith(...params: any[]): void;
        toHaveBeenCalledOnceWith(...params: any[]): void;
        toHaveBeenCalledTimes(expected: number): void;
        toContain(expected: any): void;
        toContain(expected: any, expectationFailOutput: any): void;
        toBeLessThan(expected: number): void;
        toBeLessThan(expected: number, expectationFailOutput: any): void;
        toBeLessThanOrEqual(expected: number): void;
        toBeLessThanOrEqual(expected: number, expectationFailOutput: any): void;
        toBeGreaterThan(expected: number): void;
        toBeGreaterThan(expected: number, expectationFailOutput: any): void;
        toBeGreaterThanOrEqual(expected: number): void;
        toBeGreaterThanOrEqual(expected: number, expectationFailOutput: any): void;
        toBeCloseTo(expected: number, precision?: any): void;
        toBeCloseTo(expected: number, precision: any, expectationFailOutput: any): void;
        toThrow(expected?: any): void;
        toThrowError(message?: string | RegExp): void;
        toThrowError(expected?: new (...args: any[]) => Error, message?: string | RegExp): void;
        toThrowMatching(predicate: (thrown: any) => boolean): void;
        toBeNegativeInfinity(): void;
        toBeNegativeInfinity(expectationFailOutput: any): void;
        toBePositiveInfinity(): void;
        toBePositiveInfinity(expectationFailOutput: any): void;
        toBeInstanceOf(expected: Constructor): void;
        toHaveClass(expected: string): void;
        toHaveClass(expected: string, expectationFailOutput: any): void;
        toHaveSize(expected: number): void;
        toHaveSpyInteractions(): void;
        withContext(message: string): Matchers<T>;
        not: Matchers<T>;
    }
    interface ArrayLikeMatchers<T> extends Matchers<ArrayLike<T>> {
        toBe(expected: Expected<ArrayLike<T>> | ArrayContaining<T>): void;
        toBe(expected: Expected<ArrayLike<T>> | ArrayContaining<T>, expectationFailOutput: any): void;
        toEqual(expected: Expected<ArrayLike<T>> | ArrayContaining<T>): void;
        toEqual(expected: Expected<ArrayLike<T>> | ArrayContaining<T>, expectationFailOutput: any): void;
        toContain(expected: Expected<T>): void;
        toContain(expected: Expected<T>, expectationFailOutput: any): void;
        withContext(message: string): ArrayLikeMatchers<T>;
        not: ArrayLikeMatchers<T>;
    }
    type MatchableArgs<Fn> = Fn extends (...args: infer P) => any ? {
        [K in keyof P]: Expected<P[K]>;
    } : never;
    interface FunctionMatchers<Fn extends Func> extends Matchers<any> {
        toHaveBeenCalledWith(...params: MatchableArgs<Fn>): void;
        toHaveBeenCalledOnceWith(...params: MatchableArgs<Fn>): void;
        withContext(message: string): FunctionMatchers<Fn>;
        not: FunctionMatchers<Fn>;
    }
    interface NothingMatcher {
        nothing(): void;
    }
    interface AsyncMatchers<T, U> {
        toBePending(): PromiseLike<void>;
        toBePending(expectationFailOutput: any): PromiseLike<void>;
        toBeResolved(): PromiseLike<void>;
        toBeResolved(expectationFailOutput: any): PromiseLike<void>;
        toBeRejected(): PromiseLike<void>;
        toBeRejected(expectationFailOutput: any): PromiseLike<void>;
        toBeResolvedTo(expected: Expected<T>): PromiseLike<void>;
        toBeRejectedWith(expected: Expected<U>): PromiseLike<void>;
        toBeRejectedWithError(expected?: new (...args: any[]) => Error, message?: string | RegExp): PromiseLike<void>;
        toBeRejectedWithError(message?: string | RegExp): PromiseLike<void>;
        withContext(message: string): AsyncMatchers<T, U>;
        already: AsyncMatchers<T, U>;
        not: AsyncMatchers<T, U>;
    }
    interface JasmineStartedInfo {
        totalSpecsDefined: number;
        order: Order;
    }
    interface CustomReportExpectation {
        matcherName: string;
        message: string;
        passed: boolean;
        stack: string;
    }
    interface FailedExpectation extends CustomReportExpectation {
        actual: string;
        expected: string;
    }
    interface PassedExpectation extends CustomReportExpectation {
    }
    interface DeprecatedExpectation {
        message: string;
    }
    interface SuiteResult {
        id: string;
        description: string;
        fullName: string;
        failedExpectations: FailedExpectation[];
        deprecationWarnings: DeprecatedExpectation[];
        status: string;
        duration: number | null;
        properties: {
            [key: string]: unknown;
        } | null;
    }
    interface SpecResult extends SuiteResult {
        passedExpectations: PassedExpectation[];
        pendingReason: string;
        debugLogs: DebugLogEntry[] | null;
    }
    interface DebugLogEntry {
        message: String;
        timestamp: number;
    }
    interface JasmineDoneInfo {
        overallStatus: string;
        totalTime: number;
        incompleteReason: string;
        order: Order;
        failedExpectations: ExpectationResult[];
        deprecationWarnings: ExpectationResult[];
    }
    type SuiteInfo = JasmineStartedInfo;
    type CustomReporterResult = SuiteResult & SpecResult;
    type RunDetails = JasmineDoneInfo;
    interface CustomReporter {
        jasmineStarted?(suiteInfo: JasmineStartedInfo, done?: () => void): void | Promise<void>;
        suiteStarted?(result: SuiteResult, done?: () => void): void | Promise<void>;
        specStarted?(result: SpecResult, done?: () => void): void | Promise<void>;
        specDone?(result: SpecResult, done?: () => void): void | Promise<void>;
        suiteDone?(result: SuiteResult, done?: () => void): void | Promise<void>;
        jasmineDone?(runDetails: JasmineDoneInfo, done?: () => void): void | Promise<void>;
    }
    interface SpecFilter {
        (spec: Spec): boolean;
    }
    type SpecFunction = (spec?: Spec) => void;
    interface Spec {
        new (attrs: any): any;
        readonly id: number;
        env: Env;
        readonly description: string;
        getFullName(): string;
    }
    interface Suite extends Spec {
        parentSuite: Suite;
        children: Array<Spec | Suite>;
    }
    interface Spy<Fn extends Func = Func> {
        (...params: Parameters<Fn>): ReturnType<Fn>;
        and: SpyAnd<Fn>;
        calls: Calls<Fn>;
        withArgs(...args: MatchableArgs<Fn>): Spy<Fn>;
    }
    type SpyObj<T> = T & {
        [K in keyof T]: T[K] extends Func ? T[K] & Spy<T[K]> : T[K];
    };
    function isSpy(putativeSpy: Func): putativeSpy is Spy;
    type NonTypedSpyObj<T> = SpyObj<{
        [K in keyof T]: T[K] extends Func ? Func : T[K];
    }>;
    type PromisedResolveType<T> = T extends PromiseLike<infer TResult> ? TResult : never;
    type PromisedRejectType<T> = T extends PromiseLike<unknown> ? any : never;
    interface SpyAnd<Fn extends Func> {
        identity: string;
        callThrough(): Spy<Fn>;
        returnValue(val: ReturnType<Fn>): Spy<Fn>;
        returnValues(...values: Array<ReturnType<Fn>>): Spy<Fn>;
        callFake(fn: Fn): Spy<Fn>;
        resolveTo(val?: PromisedResolveType<ReturnType<Fn>>): Spy<Fn>;
        rejectWith(val?: PromisedRejectType<ReturnType<Fn>>): Spy<Fn>;
        throwError(msg: string | Error): Spy;
        stub(): Spy;
    }
    interface Calls<Fn extends Func> {
        any(): boolean;
        count(): number;
        argsFor(index: number): Parameters<Fn>;
        allArgs(): ReadonlyArray<Parameters<Fn>>;
        all(): ReadonlyArray<CallInfo<Fn>>;
        mostRecent(): CallInfo<Fn>;
        first(): CallInfo<Fn>;
        reset(): void;
        saveArgumentsByValue(): void;
        thisFor(index: number): ThisType<Fn>;
    }
    interface CallInfo<Fn extends Func> {
        object: ThisType<Fn>;
        args: Parameters<Fn>;
        returnValue: ReturnType<Fn>;
    }
    interface Util {
        inherit(childClass: Function, parentClass: Function): any;
        formatException(e: any): any;
        htmlEscape(str: string): string;
        argsToArray(args: any): any;
        extend(destination: any, source: any): any;
    }
    interface JsApiReporter extends CustomReporter {
        new (): any;
        started: boolean;
        finished: boolean;
        runDetails: JasmineDoneInfo;
        status(): string;
        suiteResults(index: number, length: number): SuiteResult[];
        specResults(index: number, length: number): SpecResult[];
        suites(): {
            [id: string]: SuiteResult;
        };
        specs(): SpecResult[];
        executionTime(): number;
    }
    interface Jasmine {
        Spec: Spec;
        clock: Clock;
        util: Util;
    }
    var HtmlReporter: HtmlReporter;
    var HtmlSpecFilter: HtmlSpecFilter;
    var DEFAULT_TIMEOUT_INTERVAL: number;
    var MAX_PRETTY_PRINT_ARRAY_LENGTH: number;
    var MAX_PRETTY_PRINT_CHARS: number;
    var MAX_PRETTY_PRINT_DEPTH: number;
    var version: string;
    interface JasmineOptions {
        projectBaseDir?: string;
    }
    interface JasmineConfig {
        failSpecWithNoExpectations?: boolean;
        helpers?: string[];
        jsLoader?: "require" | "import";
        random?: boolean;
        requires?: string[];
        spec_dir?: string;
        spec_files?: string[];
        stopOnSpecFailure?: boolean;
        stopSpecOnExpectationFailure?: boolean;
    }
    interface DefaultReporterOptions {
        timer?: any;
        print?: (...args: any[]) => void;
        showColors?: boolean;
        jasmineCorePath?: string;
    }
}
declare module "jasmine" {
    class jasmine {
        jasmine: jasmine.Jasmine;
        env: jasmine.Env;
        reportersCount: number;
        reporter: jasmine.CustomReporter;
        showingColors: boolean;
        projectBaseDir: string;
        specDir: string;
        specFiles: string[];
        helperFiles: string[];
        requires: string[];
        defaultReporterConfigured: boolean;
        constructor(options?: jasmine.JasmineOptions);
        addMatchers(matchers: jasmine.CustomMatcherFactories): void;
        addReporter(reporter: jasmine.CustomReporter): void;
        addSpecFile(filePath: string): void;
        addMatchingSpecFiles(patterns: string[]): void;
        addHelperFile(filePath: string): void;
        addMatchingHelperFiles(patterns: string[]): void;
        addRequires(files: string[]): void;
        configureDefaultReporter(options: jasmine.DefaultReporterOptions): void;
        execute(files?: string[], filterString?: string): Promise<jasmine.JasmineDoneInfo>;
        exitOnCompletion: boolean;
        loadConfig(config: jasmine.JasmineConfig): void;
        loadConfigFile(configFilePath?: string): void;
        loadHelpers(): Promise<void>;
        loadSpecs(): Promise<void>;
        loadRequires(): void;
        provideFallbackReporter(reporter: jasmine.CustomReporter): void;
        clearReporters(): void;
        randomizeTests(value: boolean): void;
        seed(value: number): void;
        showColors(value: boolean): void;
        stopSpecOnExpectationFailure(value: boolean): void;
        stopOnSpecFailure(value: boolean): void;
        static ConsoleReporter(): any;
        coreVersion(): string;
    }
    export = jasmine;
}
