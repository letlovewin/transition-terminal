<script>
    import { browser } from "$app/environment";
    import { getApp, initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { set, getDatabase, ref, get, child } from "firebase/database";
    import { goto } from "$app/navigation";

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

    import Post from "./Post.svelte";
    import Navigation from "../Navigation.svelte";
    import { onMount } from "svelte";
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    let escapeCount = 0;
    let postTextArea = "";
    function getCurrentDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + "/" + dd + "/" + yyyy;
        return today;
    }
    function createPost() {
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
                        set(ref(database, `users/${uid}/posts/postcount`), 1);
                    }
                })
                .then(() => {
                    set(
                        ref(database, `users/${uid}/posts/post${post_count}/`),
                        {
                            post_content: postTextArea.value,
                            post_date: getCurrentDate(),
                        },
                    );
                    postTextArea.value = "";
                });
        }
    }
    const database = getDatabase(app);
    let posts;
    auth.onAuthStateChanged((user) => {
        if (user) {
            let uidRef = ref(database);
            get(child(uidRef, `users/${user.uid}/posts`)).then((snapshot) => {
                if (snapshot.exists()) {
                    posts = snapshot.val()
                } else {
                    set(ref(database, `users/${user.uid}`), {
                        //Sets some stuff in database
                        email: user.email,
                        uid: user.uid,
                    });
                }
            });
        } else {
            if (browser) {
                //Kick user back to signin page if they don't have an account or they aren't logged in
                goto("/signin");
            }
        }
    })
    setTimeout(()=>{
        if(posts!=undefined){
            console.log(posts)
            for(let i=1;i<posts.length-1;i++){
                console.log(posts[i].content)
                new Post({
                    target: 'mainposts',
                    props: {
                        header: '',
                        content: posts[i].content,
                        date: posts[i].date,
                        image: ''
                    } 
                })
            }
        }
    },250)
    
</script>

<svelte:head>
    <title>Lambda</title>
</svelte:head>

<svelte:window
    on:keydown={(event) => {
        if (event.key == "Escape") {
            escapeCount++;

            if (escapeCount % 3 == 0) {
                console.log("Redirect nao!!")
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

<Navigation />
<div class="input-group input-group-lg w-50 mt-5" style="margin:auto;">
    <input
        bind:this={postTextArea}
        type="text"
        class="form-control"
        placeholder="Write an entry..."
        aria-label="Journal entry"
        aria-describedby="button-addon2"
    />
    <button
        class="btn btn-outline-primary"
        type="button"
        id="button-addon2"
        on:click={createPost}
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-square"
            viewBox="0 0 16 16"
        >
            <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
            />
            <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
            />
        </svg></button
    >
</div>

<div id="mainposts">

</div>
