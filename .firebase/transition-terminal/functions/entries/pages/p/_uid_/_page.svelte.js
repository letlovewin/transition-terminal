import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { initializeApp } from "firebase/app";
const UserInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayUser } = $$props;
  let { bio } = $$props;
  if ($$props.displayUser === void 0 && $$bindings.displayUser && displayUser !== void 0)
    $$bindings.displayUser(displayUser);
  if ($$props.bio === void 0 && $$bindings.bio && bio !== void 0)
    $$bindings.bio(bio);
  return `<div class="row mt-2 vh-100"><div class="col-2"></div> <div class="col-6 text-center"><h3>${escape(displayUser)}</h3> <p>${escape(bio)}</p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBp1KKYhd_M5SK4y5Ofi8M7H-EjAotAWdo",
    authDomain: "lambda-community.firebaseapp.com",
    projectId: "lambda-community",
    storageBucket: "lambda-community.appspot.com",
    messagingSenderId: "316292399888",
    appId: "1:316292399888:web:40ddc69203c6c8c8c81b95",
    measurementId: "G-FGHWYFCPDN"
  };
  let { data } = $$props;
  let app = initializeApp(firebaseConfig);
  let database = getDatabase(app);
  let auth = getAuth(app);
  auth.onAuthStateChanged((user) => {
  });
  let displayUsername = "";
  let displayBio = "";
  let uid = data.context.uid;
  onValue(ref(database, `users/${uid}`), (snapshot) => {
    if (snapshot.exists()) {
      let k = snapshot.val();
      console.log(k);
      displayUsername = k.username;
      displayBio = k.bio;
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-12q5mpa_START -->${$$result.title = `<title>${escape(displayUsername)}&#39;s profile</title>`, ""}<!-- HEAD_svelte-12q5mpa_END -->`, ""} <a href="#"><img${add_attribute("src", "/icon.png", 0)} alt="Greek symbol for Lambda in pink" style="width:50px;height:50px" class="mt-2 ms-2"></a> <div class="row-1 fixed-bottom ms-3 mt-3"><button class="btn btn-sm mb-2 btn-outline-primary rounded-pill mt-2 ms-2" data-svelte-h="svelte-1a3w4nn">Upload</button> <button class="btn btn-sm mb-2 btn-outline-primary rounded-pill mt-2 ms-2" data-svelte-h="svelte-1hkmnt5">Sign out</button></div> ${validate_component(UserInfo, "UserInfo").$$render(
    $$result,
    {
      displayUser: displayUsername,
      bio: displayBio
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
