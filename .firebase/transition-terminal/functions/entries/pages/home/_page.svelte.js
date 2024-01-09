import { c as create_ssr_component, f as add_attribute } from "../../../chunks/ssr.js";
import { getAuth } from "firebase/auth";
import "firebase/storage";
import { getDatabase, ref, get, child, set } from "firebase/database";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let app = data.context.app;
  let auth = getAuth(app);
  const database = getDatabase(app);
  auth.onAuthStateChanged((user) => {
    if (user) {
      let uidRef = ref(database);
      get(child(uidRef, `users/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          set(ref(database, `users/${user.uid}`), {
            username: user.displayName,
            email: user.email,
            uid: user.uid,
            bio: ""
          });
        }
      });
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1l4atte_START -->${$$result.title = `<title>Lambda - Home</title>`, ""}<!-- HEAD_svelte-1l4atte_END -->`, ""} <div class="row mt-2 vh-100"><div class="col-3"><a href="#"><img${add_attribute("src", "icon.png", 0)} alt="Greek symbol for Lambda in pink" style="width:50px;height:50px"></a> <button class="btn btn-sm fixed-bottom mb-2 btn-outline-primary rounded-pill mt-2 ms-2" data-svelte-h="svelte-1e0g3v9">Sign out</button></div> <div class="col-6 text-center"></div></div>`;
});
export {
  Page as default
};
