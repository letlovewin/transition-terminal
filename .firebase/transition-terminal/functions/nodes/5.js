import * as universal from '../entries/pages/signup/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/signup/+page.js";
export const imports = ["_app/immutable/nodes/5.wgszV0QJ.js","_app/immutable/chunks/index-dd468b12.p6hoiiBQ.js","_app/immutable/chunks/scheduler.BEDwlmZC.js","_app/immutable/chunks/index.4gfCqfBS.js","_app/immutable/chunks/index.esm2017.xa4U4bPS.js","_app/immutable/chunks/environment.xBoTdvbE.js","_app/immutable/chunks/entry.aI1T4fYj.js"];
export const stylesheets = [];
export const fonts = [];
