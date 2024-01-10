<script>
    // @ts-nocheck
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import {
        getAuth,
        signInWithEmailAndPassword,
        AuthErrorCodes,
        sendPasswordResetEmail,
        onAuthStateChanged,
    } from "firebase/auth";
    export let data;
    let sendBack = function () {
        if (browser) {
            goto("/");
        }
    };
    let auth = data.context.auth;
    onAuthStateChanged(auth,(user)=>{
        if(user) {
            goto("/")
        }
    })
    let loginPassword = "";
    let loginEmail = "";

    let authErrorMessage = "";

    function signIn() {
        let email = loginEmail.value;
        let password = loginPassword.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (browser) {
                    goto("/");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode == AuthErrorCodes.INVALID_EMAIL) {
                    authErrorMessage = "Please enter a valid email";
                } else if (
                    errorCode == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS
                ) {
                    authErrorMessage = "Incorrect email or password";
                }
            });
    }

    function sendPasswordReset() {
        let email = loginEmail.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                authErrorMessage = "";
            })
            .catch((error) => {
                if (error.code == AuthErrorCodes.INVALID_EMAIL) {
                    authErrorMessage = "Please enter a valid email";
                }
            });
    }
</script>

<svelte:head>
    <title>Lambda - Sign in</title>
</svelte:head>

<div
    class="container vh-100 d-flex justify-content-center align-items-center"
    style="width:100%;height:100%;"
>
    <div class="container align-items-center text-center p-2 w-50">
        <img
            src={"icon.png"}
            alt="Greek letter lambda in pink"
            style="width:150px;height:150px;margin:auto;"
            class="lambda-icon"
        />
        <h1 class="">Sign in</h1>
        <div class="row">
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
        <button class="btn btn-primary btn-lg rounded-pill" on:click={signIn}
            >Sign in</button
        >
        <p class="error mt-2">{authErrorMessage}</p>
        <p class="mt-2">Don't have an account? <a href="/signup">Sign up</a></p>
        <p class="mt-1">
            <a href="#" on:click={sendPasswordReset}>Forgot your password?</a>
        </p>
    </div>
</div>

<button
    class="btn btn-outline-primary btn-lg ms-2 mt-2 rounded-circle position-absolute top-0 start-0"
    on:click={sendBack}
    >←</button
>