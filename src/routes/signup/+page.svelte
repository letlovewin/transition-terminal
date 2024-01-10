<script>
    // @ts-nocheck
    // @ts-ignore
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import {
        AuthErrorCodes,
        createUserWithEmailAndPassword,
        getAuth,
    } from "firebase/auth";
    import {
        getStorage,
    } from "firebase/storage";
    export let data;
    let sendBack = function () {
        if (browser) {
            goto("/");
        }
    };
    let app = data.context.app;
    let auth = getAuth(app);

    auth.onAuthStateChanged((user) => {
        if (user) {
            sendBack();
        }
    });

    let loginPassword = "";
    let loginEmail = "";

    let authErrorMessage = "";

    const createAccount = async () => {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            loginEmail.value,
            loginPassword.value,
        )
            .then(() => {

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
            class="lambda-icon"
        />
        <h1 class="">Create an account</h1>
        <div>
            <div class="input-group mb-3">
                <input
                    type="text"
                    bind:this={loginEmail}
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                />
            </div>
            <div class="input-group mb-3">
                <input
                    type="password"
                    bind:this={loginPassword}
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
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
    on:click={sendBack}>←</button
>
