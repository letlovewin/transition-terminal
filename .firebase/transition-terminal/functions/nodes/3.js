import * as universal from '../entries/pages/home/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/home/+page.js";
export const imports = ["_app/immutable/nodes/3.-CZ2oiKO.js","_app/immutable/chunks/index-dd468b12.p6hoiiBQ.js","_app/immutable/chunks/entry.aI1T4fYj.js","_app/immutable/chunks/scheduler.BEDwlmZC.js","_app/immutable/chunks/index.4gfCqfBS.js","_app/immutable/chunks/index.esm2017.xa4U4bPS.js","_app/immutable/chunks/environment.xBoTdvbE.js","_app/immutable/chunks/stores.R_P2ZKE6.js","_app/immutable/chunks/Modal.G52m9gS2.js"];
export const stylesheets = ["_app/immutable/assets/3.eFzOnRrn.css","_app/immutable/assets/Modal.1DW7fxMj.css"];
export const fonts = [];
