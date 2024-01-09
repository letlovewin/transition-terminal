<script>
    // @ts-nocheck
    // @ts-ignore
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import {
        AuthErrorCodes,
        createUserWithEmailAndPassword,
        getAuth,
        updateProfile,
    } from "firebase/auth";
    import {
        getStorage,
        ref,
        uploadString,
        uploadBytes,
    } from "firebase/storage";
    /** @type {import('./$types').PageData}*/
    export let data;
    let sendBack = function () {
        if (browser) {
            goto("/");
        }
    };
    let app = data.context.app;
    let auth = getAuth(app);
    let storage = getStorage(app);

    auth.onAuthStateChanged((user) => {
        if (user) {
            if (browser) {
                goto("/home");
            }
        }
    });

    let loginUsername = "";
    let loginPassword = "";
    let loginEmail = "";

    let authErrorMessage = "";

    const createAccount = async () => {
        // @ts-ignore
        //console.log(loginEmail.value)
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            loginEmail.value,
            loginPassword.value,
        )
            .then(() => {
                updateProfile(userCredential.user, {
                    // @ts-ignore
                    displayName: loginUsername.value,
                });
            })
            .catch((error) => {
                let errorCode = error.code;
                console.log(errorCode);
                if (errorCode == AuthErrorCodes.INVALID_EMAIL) {
                    authErrorMessage = "Please use a valid email";
                } else if (errorCode == "auth/email-already-in-use") {
                    authErrorMessage = "Email already exists";
                } else if (errorCode == AuthErrorCodes.INVALID_PASSWORD) {
                    authErrorMessage = "Please enter a valid password";
                } else if (errorCode == AuthErrorCodes.WEAK_PASSWORD) {
                    authErrorMessage =
                        "Password is too weak, must be more than 6 characters";
                }
            });
    };
</script>

<svelte:head>
    <title>Lambda - Sign up</title>
</svelte:head>



<div
    class="container vh-100 d-flex justify-content-center align-items-center overflow-hidden"
    style="width:100%;height:90%;"
>
    <div class="container align-items-center text-center p-2 w-50">
        <img
            src={"icon.png"}
            alt="Greek letter lambda in pink"
            style="width:150px;height:150px;"
        />
        <h1 class="">Create an account</h1>
        <div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="username-addon">@</span>
                <input
                    type="text"
                    bind:this={loginUsername}
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="username-addon"
                />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="email-addon"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                        />
                    </svg></span
                >
                <input
                    type="text"
                    bind:this={loginEmail}
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="email-addon"
                />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="password-addon"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-lock"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"
                        />
                    </svg></span
                >
                <input
                    type="password"
                    bind:this={loginPassword}
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="password-addon"
                />
            </div>
        </div>
        <button
            class="mt-2 btn btn-primary btn-lg rounded-pill"
            id="btn-signup"
            on:click={createAccount}>Sign up</button
        >
        <p class="error mt-2">{authErrorMessage}</p>
        <p class="mt-1">
            Already have an account? <a href="/signin">Sign in</a>
        </p>
    </div>
</div>

<button
    class="btn btn-outline-primary btn-lg ms-2 mt-2 rounded-circle position-absolute top-0 start-0"
    on:click={sendBack}
    >←</button
>