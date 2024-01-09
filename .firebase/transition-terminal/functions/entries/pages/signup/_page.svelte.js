import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let app = data.context.app;
  let auth = getAuth(app);
  getStorage(app);
  auth.onAuthStateChanged((user) => {
  });
  let loginUsername = "";
  let loginPassword = "";
  let loginEmail = "";
  let authErrorMessage = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-n4egtv_START -->${$$result.title = `<title>Lambda - Sign up</title>`, ""}<!-- HEAD_svelte-n4egtv_END -->`, ""} <button class="btn btn-primary ms-2 mt-2 rounded-circle" id="btn-back"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"></path></svg></button> <div class="container vh-100 d-flex justify-content-center align-items-center" style="width:100%;height:90%;"><div class="container align-items-center text-center p-2 w-50"><h1 class="" data-svelte-h="svelte-1qdpjm3">Create an account</h1> <div><div class="input-group mb-3"><span class="input-group-text" id="username-addon" data-svelte-h="svelte-16lqu22">@</span> <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="username-addon"${add_attribute("this", loginUsername, 0)}></div> <div class="input-group mb-3"><span class="input-group-text" id="email-addon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path></svg></span> <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"${add_attribute("this", loginEmail, 0)}></div> <div class="input-group mb-3"><span class="input-group-text" id="password-addon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"></path></svg></span> <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"${add_attribute("this", loginPassword, 0)}></div></div> <button class="mt-2 btn btn-primary btn-lg rounded-pill" id="btn-signup" data-svelte-h="svelte-1fkjp2r">Sign up</button> <p class="error mt-2">${escape(authErrorMessage)}</p> <p class="mt-1">Already have an account? <a href="/signin" data-svelte-h="svelte-1iuplsv">Sign in</a></p></div></div>`;
});
export {
  Page as default
};
