import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let app = data.context.app;
  let auth = getAuth(app);
  getStorage(app);
  auth.onAuthStateChanged((user) => {
    if (user) {
      if (user.displayName != null)
        ;
    }
  });
  let loginUsername = "";
  let loginPassword = "";
  let loginEmail = "";
  let authErrorMessage = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-n4egtv_START -->${$$result.title = `<title>Lambda - Sign up</title>`, ""}<!-- HEAD_svelte-n4egtv_END -->`, ""} <div class="container vh-100 d-flex justify-content-center align-items-center overflow-hidden" style="width:100%;height:90%;"><div class="container align-items-center text-center p-2 w-50"><img${add_attribute("src", "icon.png", 0)} alt="Greek letter lambda in pink" style="width:150px;height:150px;" class="lambda-icon"> <h1 class="" data-svelte-h="svelte-1qdpjm3">Create an account</h1> <div><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Username" aria-label="Username"${add_attribute("this", loginUsername, 0)}></div> <div class="input-group mb-3"><input type="text" class="form-control" placeholder="Email" aria-label="Email"${add_attribute("this", loginEmail, 0)}></div> <div class="input-group mb-3"><input type="password" class="form-control" placeholder="Password" aria-label="Password"${add_attribute("this", loginPassword, 0)}></div></div> <button class="mt-2 btn btn-primary btn-lg rounded-pill" id="btn-signup" data-svelte-h="svelte-1fkjp2r">Sign up</button> <p class="error mt-2">${escape(authErrorMessage)}</p> <p class="mt-1">Already have an account? <a href="/signin" data-svelte-h="svelte-1iuplsv">Sign in</a></p></div></div> <button class="btn btn-outline-primary btn-lg ms-2 mt-2 rounded-circle position-absolute top-0 start-0" data-svelte-h="svelte-1vh56fx">←</button>`;
});
export {
  Page as default
};
