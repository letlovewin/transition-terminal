

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.De9DE7aD.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.paqrU1Cq.js","_app/immutable/chunks/singletons.ZcnH8_DZ.js"];
export const stylesheets = [];
export const fonts = [];
