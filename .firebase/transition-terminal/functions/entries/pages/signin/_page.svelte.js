import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.context.auth;
  let loginPassword = "";
  let loginEmail = "";
  let authErrorMessage = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-yyh1ud_START -->${$$result.title = `<title>Lambda - Sign in</title>`, ""}<!-- HEAD_svelte-yyh1ud_END -->`, ""} <div class="container vh-100 d-flex justify-content-center align-items-center" style="width:100%;height:100%;"><div class="container align-items-center text-center p-2 w-50"><img${add_attribute("src", "icon.png", 0)} alt="Greek letter lambda in pink" style="width:150px;height:150px;margin:auto;" class="lambda-icon"> <h1 class="" data-svelte-h="svelte-oqi9ef">Sign in</h1> <div class="row"><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Email" aria-label="Email"${add_attribute("this", loginEmail, 0)}></div> <div class="input-group mb-3"><input type="password" class="form-control" placeholder="Password" aria-label="Password"${add_attribute("this", loginPassword, 0)}></div></div> <button class="btn btn-primary btn-lg rounded-pill" data-svelte-h="svelte-pkr3hh">Sign in</button> <p class="error mt-2">${escape(authErrorMessage)}</p> <p class="mt-2">Don&#39;t have an account? <a href="/signup" data-svelte-h="svelte-tb1kzj">Sign up</a></p> <p class="mt-1"><a href="#" data-svelte-h="svelte-16jggph">Forgot your password?</a></p></div></div> <button class="btn btn-outline-primary btn-lg ms-2 mt-2 rounded-circle position-absolute top-0 start-0" data-svelte-h="svelte-ghx48b">←</button>`;
});
export {
  Page as default
};
