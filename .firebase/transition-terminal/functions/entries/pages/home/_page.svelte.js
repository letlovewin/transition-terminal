import { c as create_ssr_component, f as add_attribute, e as escape, b as validate_store, d as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, child } from "firebase/database";
import "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
import { M as Modal } from "../../../chunks/Modal.js";
import { getStorage, ref as ref$1, getDownloadURL } from "firebase/storage";
const css$2 = {
  code: "@media only screen and (max-width: 600px){#post.s-Qob7s8P0_B9V{width:85%}}@media only screen and (min-width: 601px){#post.s-Qob7s8P0_B9V{width:50%}}",
  map: null
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { date } = $$props;
  let { image } = $$props;
  let { poster } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.poster === void 0 && $$bindings.poster && poster !== void 0)
    $$bindings.poster(poster);
  $$result.css.add(css$2);
  return `<div class="card my-5 s-Qob7s8P0_B9V" id="post" style="margin:auto;"><img${add_attribute("src", image, 0)} class="card-img-top" alt="..."> <div class="card-body"><p class="card-text">Posted by <strong>${escape(poster)}</strong></p> ${content ? `<p class="card-text">${escape(content)}</p>` : ``} <p class="subtext mt-2 text-secondary">${escape(date)}</p></div> </div>`;
});
const css$1 = {
  code: "@media only screen and (max-width: 600px){#desktop-navbar.s-oJqktDhFOa2K{display:none}#mobile-navbar.s-oJqktDhFOa2K{display:block}}@media only screen and (min-width: 601px){#desktop-navbar.s-oJqktDhFOa2K{display:block}#mobile-navbar.s-oJqktDhFOa2K{display:none}}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const app = getApp();
  getAuth(app);
  $$result.css.add(css$1);
  return ` <div class="position-fixed vstack gap-3 border-end top-0 h-100 z-3 bg-light s-oJqktDhFOa2K" id="desktop-navbar"><a href="/home"><img${add_attribute("src", "icon.png", 0)} alt="Greek symbol for Lambda in pink" style="width:50px;height:50px" class="mx-4 mt-2"></a> <div class="btn-group dropend position-absolute bottom-0 start-50 translate-middle-x"><button type="button" class="btn btn-sm my-2 btn-outline-primary rounded-pill dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"></path></svg>
            More</button> <ul class="dropdown-menu"><li><button class="btn btn-sm" data-svelte-h="svelte-r188sr">Sign out</button></li></ul></div></div> <div class="position-fixed bottom-0 border-top w-100 z-3 bg-light s-oJqktDhFOa2K" style="height:50px;" id="mobile-navbar"><a href="/home"><img${add_attribute("src", "icon.png", 0)} alt="Greek symbol for Lambda in pink" style="width:30px;height:30px;" class="mx-4 mt-2"></a> <div class="dropup-center dropup position-absolute mb-1 bottom-0 end-0"><button class="btn btn-sm btn-outline-primary border-0 dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"></path></svg></button> <ul class="dropdown-menu"><li><button class="btn btn-sm" data-svelte-h="svelte-r188sr">Sign out</button></li></ul></div> </div>`;
});
const css = {
  code: "@media only screen and (max-width: 600px){#post-textarea.s-A-bC3Hke5zSn{width:85%}}@media only screen and (min-width: 601px){#post-textarea.s-A-bC3Hke5zSn{width:50%}}",
  map: null
};
function getCurrentDate() {
  var today = /* @__PURE__ */ new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return today;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  const firebaseConfig = {
    apiKey: "AIzaSyDTyfRBAraHLshds-X3p5zwNE8ITnmXYWk",
    authDomain: "transition-terminal.firebaseapp.com",
    databaseURL: "https://transition-terminal-default-rtdb.firebaseio.com",
    projectId: "transition-terminal",
    storageBucket: "transition-terminal.appspot.com",
    messagingSenderId: "314390865424",
    appId: "1:314390865424:web:6b8da509ac009b5dad0c95",
    measurementId: "G-3WXEVRFJVD"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
  const storage = getStorage(app);
  let postTextArea = "";
  let postDisplay;
  let userDisplayName;
  let isLoaded = false;
  let showModal = false;
  let posts;
  function loadPosts(post_list) {
    for (const [key, value] of Object.entries(post_list).reverse()) {
      if (key != "postcount") {
        let curr_date = new Date(getCurrentDate());
        let past_date = new Date(value.post_date);
        let diff = Math.round((curr_date.getTime() - past_date.getTime()) / (1e3 * 3600 * 24));
        let s = "";
        if (diff > 1) {
          s = "s";
        }
        let postDate = `${diff} day${s} ago`;
        if (diff <= 0) {
          postDate = "Today";
        }
        let postRef = ref$1(storage, value.post_image);
        getDownloadURL(postRef).then((url) => {
          new Post({
            target: postDisplay,
            props: {
              content: value.post_content,
              image: url,
              date: postDate,
              poster: value.post_username
            }
          });
        });
      }
    }
  }
  auth.onAuthStateChanged((user) => {
    if (user) {
      user.uid;
      if (isLoaded == false) {
        let uidRef = ref(database);
        get(child(uidRef, `users/${user.uid}/posts`)).then((snapshot) => {
          if (snapshot.exists()) {
            posts = snapshot.val();
            loadPosts(posts);
            isLoaded = true;
          } else {
            if (user.displayName == null) {
              showModal = true;
            }
          }
        });
      }
    }
  });
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-vvayrk_START -->${$$result.title = `<title>Lambda</title>`, ""}<!-- HEAD_svelte-vvayrk_END -->`, ""}  ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <div class="container mt-5 border border-start rounded s-A-bC3Hke5zSn" id="post-textarea" style="margin:auto;"><h5 class="text-center mt-2" data-svelte-h="svelte-8my6w5">Create a post</h5> <div class="text-center"><label class="btn btn-default" style="margin:auto;text-align:center;"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"></path><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"></path></svg> <input type="file" accept="image/gif,image/jpeg,image/png,image/webp" hidden> <br>
            Upload a photo</label></div> <input type="textarea" class="form-control border-0 mb-2" placeholder="Write a caption (optional)" aria-label="Optional caption"${add_attribute("this", postTextArea, 0)}></div> <div style="margin-bottom:10px;" id="div-post-display"${add_attribute("this", postDisplay, 0)}></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { closeButton: "false", showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="header" data-svelte-h="svelte-1063xhw">Choose a username</h2>`;
        },
        default: () => {
          return `<p data-svelte-h="svelte-1aoulqt">Welcome to Lambda! Before you start, can you pick a username?</p> <div class="input-group mb-3"><span class="input-group-text" id="basic-addon1" data-svelte-h="svelte-kr7wb3">@</span> <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"${add_attribute("this", userDisplayName, 0)}></div> <button class="btn btn-primary rounded-pill" data-svelte-h="svelte-mjb076">Choose</button>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
