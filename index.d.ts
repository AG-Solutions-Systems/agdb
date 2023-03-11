declare module 'agdb' {
  class agDB {
    constructor(engine: LocalFileEngine, options?: object);

    static browserEngine: typeof BrowserEngine;
    static localFileEngine: typeof LocalFileEngine;

    default(defaultValue: object): agDB;
    length(): agDB;
    delete(reindexLists: boolean): void;
    push(value: any): void;
    get(value: any, dotNotation?: boolean): agDB;
    set(key: any, value?: any, dotNotation?: boolean): agDB;
    map<T>(func: (value: any, index?: number, array?: any[]) => T): agDB;
    sort<T>(func: (a: T, b: T) => number): agDB;
    filter<T, S extends T>(func: (value: T, index?: number, array?: T[]) => value is S): agDB;
    reduce(func: any): agDB;
    value(): any;
    setValue(value: any, pointers: any[], setRecursively?: boolean): void;
    save(): Promise<void> | null;
  }

  class LocalFileEngine {
    constructor(path: string, options?: object);
    init(): object;
    read(): object;
    write(data: any): Promise<void> | null;
  }

  class BrowserEngine {
    constructor(path: string, options?: object);
    init(): object;
    read(): object;
    write(data: any): Promise<void> | null;
  }

  export = agDB;
}
