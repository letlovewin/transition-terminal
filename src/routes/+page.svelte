<script>
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import Modal from "./Modal.svelte";

    let showModal = false;
</script>

<svelte:head>
    <title>Lambda</title>
</svelte:head>

<div
    class="container vh-100 d-flex justify-content-center align-items-center"
    style="width:100%;height:100%;"
>
    <div class="container">
        <div class="container align-items-center text-center p-2 my-auto">
            <img
                src={"icon.png"}
                alt="Greek letter lambda in pink"
                style="width:200px;height:200px;"
            />
            <h1>Lambda</h1>
            <p>A personal notebook for your gender transition</p>
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

<a
    href="#"
    on:click={() => {
        if (showModal == false) {
            showModal = true;
        }
    }}
    class="m-2 ms-3 position-fixed start-0 bottom-0 text-secondary">About</a
>

<Modal bind:showModal>
	<h2 slot="header">
		About
	</h2>
    <p>It's pretty unconventional to document a second puberty. I started HRT and documenting the changes were a pain in the neck since there wasn't really a dedicated app for that purpose.</p>
    <p>This website was made by letluvwin on discord.</p>
</Modal>