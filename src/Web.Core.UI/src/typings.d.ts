interface ApiConfig {
  host: string;
  prefix: string,
  cache: boolean,
  cacheLanguage: boolean
}

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var __appConfig__: ApiConfig;
declare var jQuery: any;
declare const $: any;
declare var _: any;
declare var require: any;
declare var particlesJS: any;
declare var Stats: any;