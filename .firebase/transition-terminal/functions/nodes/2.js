import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.3w7uu2JM.js","_app/immutable/chunks/index-dd468b12.p6hoiiBQ.js","_app/immutable/chunks/entry.aI1T4fYj.js","_app/immutable/chunks/scheduler.BEDwlmZC.js","_app/immutable/chunks/index.4gfCqfBS.js","_app/immutable/chunks/environment.xBoTdvbE.js","_app/immutable/chunks/Modal.G52m9gS2.js"];
export const stylesheets = ["_app/immutable/assets/Modal.1DW7fxMj.css"];
export const fonts = [];
