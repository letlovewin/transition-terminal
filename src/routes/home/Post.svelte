<script>
    export let header;
    export let content;
    export let date;
    export let image;
</script>

<div class="card mt-5" style="width: 24rem;margin:auto;">
    {#if (image!=undefined)}
        <img src={image} class="card-img-top" alt="...">
    {/if}

    <div class="card-body">
      <h5 class="card-title">{header}</h5>
      <p class="subtext mt-2 text-secondary">{date}</p>
      <p class="card-text">{content}</p>
    </div>
</div>