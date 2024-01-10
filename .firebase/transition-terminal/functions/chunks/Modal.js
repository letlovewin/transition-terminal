import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const css = {
  code: "dialog.s-oqGDljZKGr3Y.s-oqGDljZKGr3Y{max-width:32em;border-radius:0.2em;border:none;padding:0;position:absolute;margin:auto}dialog.s-oqGDljZKGr3Y.s-oqGDljZKGr3Y::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.s-oqGDljZKGr3Y>div.s-oqGDljZKGr3Y{padding:1em}dialog[open].s-oqGDljZKGr3Y.s-oqGDljZKGr3Y{animation:s-oqGDljZKGr3Y-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes s-oqGDljZKGr3Y-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].s-oqGDljZKGr3Y.s-oqGDljZKGr3Y::backdrop{animation:s-oqGDljZKGr3Y-fade 0.2s ease-out}@keyframes s-oqGDljZKGr3Y-fade{from{opacity:0}to{opacity:1}}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let { closeButton } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  $$result.css.add(css);
  return ` <dialog class="s-oqGDljZKGr3Y"${add_attribute("this", dialog, 0)}> <div class="s-oqGDljZKGr3Y">${slots.header ? slots.header({}) : ``} <hr> ${slots.default ? slots.default({}) : ``} <hr>  ${closeButton == "true" ? `<button class="btn btn-outline-secondary" autofocus data-svelte-h="svelte-u93mmn">Close</button>` : ``}</div> </dialog>`;
});
export {
  Modal as M
};
