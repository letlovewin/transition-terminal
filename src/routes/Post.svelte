<script>
    export let content;
    export let date;
    export let image;
    export let poster;
</script>

    <div class="post card my-5" style="margin:auto;">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
            <p class="card-text">Posted by <strong>{poster}</strong></p>
            {#if content}
                <p class="card-text">{content}</p>
            {/if}
            
            <p class="subtext mt-2 text-secondary">{date}</p>
            
        </div>
    </div>

<style>
    @media only screen and (max-width: 600px) {
        .post {
            width: 85%;
        }
    }
    @media only screen and (min-width: 601px) {
        .post {
            width: 50%;
        }
    }
</style>
