

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.wXqK5-2I.js","_app/immutable/chunks/scheduler.BEDwlmZC.js","_app/immutable/chunks/index.4gfCqfBS.js"];
export const stylesheets = ["_app/immutable/assets/0.E5O1qdo5.css"];
export const fonts = [];
