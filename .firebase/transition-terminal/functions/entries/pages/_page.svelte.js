import { c as create_ssr_component, f as add_attribute } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-vvayrk_START -->${$$result.title = `<title>Lambda</title>`, ""}<!-- HEAD_svelte-vvayrk_END -->`, ""} <div class="container vh-100 d-flex justify-content-center align-items-center" style="width:100%;height:100%;"><div class="container"><div class="container align-items-center text-center p-2 my-auto"><img${add_attribute("src", "icon.png", 0)} alt="Greek letter lambda in pink" style="width:200px;height:200px;"> <h1 data-svelte-h="svelte-bfnwdv">Lambda</h1> <p data-svelte-h="svelte-1eyw3zw">A personal notebook for your gender transition</p> <div class="row"><div class="col"><button class="btn btn-lg btn-primary rounded-pill" data-svelte-h="svelte-47lcef">Create a new account</button></div></div> <br> <div class="row"><div class="col"><button class="btn btn-lg btn-secondary rounded-pill" data-svelte-h="svelte-1cl4be3">Sign in</button></div></div></div></div></div>`;
});
export {
  Page as default
};
