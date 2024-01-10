<script>
    import { browser } from "$app/environment";
    import { initializeApp } from "firebase/app";
    import { getAuth, updateProfile } from "firebase/auth";
    import { set, getDatabase, ref, get, child } from "firebase/database";
    import { goto, invalidateAll } from "$app/navigation";
    import { page } from "$app/stores";

    const firebaseConfig = {
        apiKey: "AIzaSyDTyfRBAraHLshds-X3p5zwNE8ITnmXYWk",
        authDomain: "transition-terminal.firebaseapp.com",
        databaseURL: "https://transition-terminal-default-rtdb.firebaseio.com",
        projectId: "transition-terminal",
        storageBucket: "transition-terminal.appspot.com",
        messagingSenderId: "314390865424",
        appId: "1:314390865424:web:6b8da509ac009b5dad0c95",
        measurementId: "G-3WXEVRFJVD",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const database = getDatabase(app);
    const storage = getStorage(app);

    import Post from "./Post.svelte";
    import Navigation from "./Navigation.svelte";
    import Modal from "./Modal.svelte";

    import {
        getDownloadURL,
        getStorage,
        ref as sRef,
        uploadBytes,
    } from "firebase/storage";

    let postTextArea = "";
    let postDisplay;
    let userDisplayName;

    let isLoaded = false;
    let isLoggedIn = false;
    let showModal = false;

    let userId = "";

    let posts;
    let escapeCount = 0;

    function getCurrentDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + "/" + dd + "/" + yyyy;
        return today;
    }

    function loadPosts(post_list) {
        for (const [key, value] of Object.entries(post_list).reverse()) {
            if (key != "postcount") {
                let curr_date = new Date(getCurrentDate());
                let past_date = new Date(value.post_date);
                let diff = Math.round(
                    (curr_date.getTime() - past_date.getTime()) /
                        (1000 * 3600 * 24),
                );
                let s = "";
                if (diff > 1) {
                    s = "s";
                }
                let postDate = `${diff} day${s} ago`;
                if (diff <= 0) {
                    postDate = "Today";
                }
                let postRef = sRef(storage, value.post_image);
                getDownloadURL(postRef).then((url) => {
                    new Post({
                        target: postDisplay,
                        props: {
                            content: value.post_content,
                            image: url,
                            date: postDate,
                            poster: value.post_username,
                        },
                    });
                });
            }
        }
    }


    function createPost() {
        if (browser) {
            const database = getDatabase(app);
            if (getAuth(app).currentUser != null) {
                const uid = getAuth(app).currentUser.uid;
                let post_count = 1;
                get(child(ref(database), `users/${uid}/posts/postcount`))
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            set(
                                ref(database, `users/${uid}/posts/postcount`),
                                snapshot.val() + 1,
                            );
                            post_count = snapshot.val() + 1;
                        } else {
                            set(
                                ref(database, `users/${uid}/posts/postcount`),
                                1,
                            );
                        }
                    })
                    .then(() => {
                        const fileList = this.files;
                        const file = fileList[0];
                        console.log(file.name);
                        const postRef = sRef(
                            storage,
                            `posts/${userId}/post${post_count}`,
                        );

                        uploadBytes(postRef, file).then(() => {
                            console.log(auth.currentUser.displayName);

                            set(
                                ref(
                                    database,
                                    `users/${uid}/posts/post${post_count}/`,
                                ),
                                {
                                    post_content: postTextArea.value,
                                    post_date: getCurrentDate(),
                                    post_image: `posts/${userId}/post${post_count}`,
                                    post_username: auth.currentUser.displayName,
                                },
                            ).then(() => {
                                //TODO: CREATE A DUMMY POST INSTEAD OF REDIRECTING. SMOOTHER USER EXPERIENCE
                                location = "/";
                            });
                        });
                    });
            }
        }
    }

    function askForUsername() {
        if (auth.currentUser) {
            showModal = false;
            console.log(userDisplayName.value);
            let user = auth.currentUser;
            set(ref(database, `users/${user.uid}`), {
                //Sets some stuff in database
                email: user.email,
                uid: user.uid,
                username: userDisplayName.value,
                friends: {}, //set this up to have each element point to another uid in an undirected graph
                friend_requests: {},
            }).then(() => {
                updateProfile(auth.currentUser, {
                    displayName: userDisplayName.value,
                }).then(() => {
                    showModal = false;
                });
            });
        }
    }

    auth.onAuthStateChanged((user) => {
        if (user) {
            isLoggedIn = true;
            userId = user.uid;
            if (isLoaded == false) {
                let uidRef = ref(database);

                get(child(uidRef, `users/${user.uid}/posts`)).then(
                    (snapshot) => {
                        if (snapshot.exists()) {
                            posts = snapshot.val();
                            loadPosts(posts);
                            isLoaded = true;
                        } else {
                            if (user.displayName == null) {
                                showModal = true;
                            }
                        }
                    },
                );
            }
        } else {
            if (browser) {
                isLoggedIn = false
            }
        }
    });
</script>

<svelte:head>
    <title>Lambda</title>
</svelte:head>

<svelte:window
    on:keydown={(event) => {
        if (event.key == "Escape") {
            escapeCount++;

            if (escapeCount % 3 == 0) {
                console.log("Redirect nao!!");
                /*
                if (browser) {
                    location = "https://classroom.google.com";
                }
                */
            }
            setTimeout(function () {
                escapeCount = 0;
            }, 500);
        }
    }}
/>

{#key isLoggedIn}
    {#if !isLoggedIn}
        <div
            class="container vh-100 d-flex justify-content-center align-items-center"
            style="width:100%;height:100%;"
        >
            <div class="container">
                <div
                    class="container align-items-center text-center p-2 my-auto"
                >
                    <img
                        src={"icon.png"}
                        alt="Greek letter lambda in pink"
                        style="width:200px;height:200px;"
                    />
                    <h1>Lambda</h1>
                    <p>Express yourself freely</p>
                    <div class="row">
                        <div class="col">
                            <button
                                class="btn btn-lg btn-primary rounded-pill"
                                on:click={() => {
                                    if (browser) {
                                        goto("/signup");
                                    }
                                }}>Create a new account</button
                            >
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col">
                            <button
                                class="btn btn-lg btn-secondary rounded-pill"
                                on:click={() => {
                                    if (browser) {
                                        goto("/signin");
                                    }
                                }}>Sign in</button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button
            on:click={() => {
                if (showModal == false) {
                    showModal = true;
                }
            }}
            class="btn btn-default text-secondary m-2 ms-3 position-fixed start-0 bottom-0"
            >About</button
        >
        <Modal bind:showModal closeButton="true">
            <h2 slot="header">About</h2>
            <p>
                Blah blah blah idk really
            </p>
            <p>This website was made by letluvwin on discord.</p>
        </Modal>
    {:else}
        <Navigation />
        <div
            class="container mt-5 border border-start rounded"
            id="post-textarea"
            style="margin:auto;"
        >
            <h5 class="text-center mt-2">Create a post</h5>
            <div class="text-center">
                <label
                    class="btn btn-default"
                    style="margin:auto;text-align:center;"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-camera"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"
                        />
                        <path
                            d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                        />
                    </svg>
                    <input
                        type="file"
                        accept="image/gif,image/jpeg,image/png,image/webp"
                        on:change={createPost}
                        hidden
                    /> <br />
                    Upload a photo
                </label>
            </div>

            <input
                bind:this={postTextArea}
                type="textarea"
                class="form-control border-0 mb-2"
                placeholder="Write a caption (optional)"
                aria-label="Optional caption"
            />
        </div>

        {#key $page.url.pathname}
            <div
                bind:this={postDisplay}
                style="margin-bottom:10px;"
                id="div-post-display"
            ></div>
        {/key}

        <Modal bind:showModal closeButton="false">
            <h2 slot="header">Choose a username</h2>
            <p>Welcome to Lambda! Before you start, can you pick a username?</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    bind:this={userDisplayName}
                />
            </div>
            <button
                class="btn btn-primary rounded-pill"
                on:click={()=>{
                    askForUsername();
                    showModal = false;
                }}>Choose</button
            >
        </Modal>
    {/if}
{/key}

<style>
    @media only screen and (max-width: 600px) {
        #post-textarea {
            width: 85%;
        }
    }
    @media only screen and (min-width: 601px) {
        #post-textarea {
            width: 50%;
        }
    }
</style>
