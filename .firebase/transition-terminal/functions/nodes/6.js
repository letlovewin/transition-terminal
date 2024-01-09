import * as universal from '../entries/pages/signup/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/signup/+page.js";
export const imports = ["_app/immutable/nodes/6.q7vBlGW_.js","_app/immutable/chunks/navigation.frHbLkcC.js","_app/immutable/chunks/singletons.ZcnH8_DZ.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.rE9O-scq.js","_app/immutable/chunks/index.paqrU1Cq.js","_app/immutable/chunks/globals.0cDDIVm6.js","_app/immutable/chunks/environment.xBoTdvbE.js","_app/immutable/chunks/index.esm2017.8ofjff34.js"];
export const stylesheets = [];
export const fonts = [];
