import { c as create_ssr_component, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { M as Modal } from "../../chunks/Modal.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-vvayrk_START -->${$$result.title = `<title>Lambda</title>`, ""}<!-- HEAD_svelte-vvayrk_END -->`, ""} <div class="container vh-100 d-flex justify-content-center align-items-center" style="width:100%;height:100%;"><div class="container"><div class="container align-items-center text-center p-2 my-auto"><img${add_attribute("src", "icon.png", 0)} alt="Greek letter lambda in pink" style="width:200px;height:200px;"> <h1 data-svelte-h="svelte-bfnwdv">Lambda</h1> <p data-svelte-h="svelte-yu1vx6">Express yourself freely</p> <div class="row"><div class="col"><button class="btn btn-lg btn-primary rounded-pill" data-svelte-h="svelte-1g9gr1r">Create a new account</button></div></div> <br> <div class="row"><div class="col"><button class="btn btn-lg btn-secondary rounded-pill" data-svelte-h="svelte-rsiqob">Sign in</button></div></div></div></div></div> <a href="#" class="m-2 ms-3 position-fixed start-0 bottom-0 text-secondary" data-svelte-h="svelte-1a7mt8n">About</a> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { closeButton: "true", showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="header" data-svelte-h="svelte-1rqwu9q">About</h2>`;
        },
        default: () => {
          return `<p data-svelte-h="svelte-o7pyof">It&#39;s pretty unconventional to document a second puberty. I started HRT and documenting the changes were a pain in the neck since there wasn&#39;t really a dedicated app for that purpose.</p> <p data-svelte-h="svelte-3fht5r">This website was made by letluvwin on discord.</p>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
