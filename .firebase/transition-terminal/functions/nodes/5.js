import * as universal from '../entries/pages/signin/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signin/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/signin/+page.js";
export const imports = ["_app/immutable/nodes/5.PCHiHwVo.js","_app/immutable/chunks/navigation.frHbLkcC.js","_app/immutable/chunks/singletons.ZcnH8_DZ.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.rE9O-scq.js","_app/immutable/chunks/index.paqrU1Cq.js","_app/immutable/chunks/environment.xBoTdvbE.js"];
export const stylesheets = [];
export const fonts = [];