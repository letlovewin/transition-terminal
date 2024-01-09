import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Ev7Yy-gh.js","_app/immutable/chunks/navigation.frHbLkcC.js","_app/immutable/chunks/singletons.ZcnH8_DZ.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.rE9O-scq.js","_app/immutable/chunks/index.paqrU1Cq.js"];
export const stylesheets = [];
export const fonts = [];
