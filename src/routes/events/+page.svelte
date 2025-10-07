<script lang="ts">

  import { onMount } from 'svelte'
  import { allEvents } from '$lib/utils/localpulls'

  let events:any = [];

  onMount(() => {
    (async() => {
      events = await allEvents();
      events = [...events];
    })()
  })

</script>

<div class="padded column container100vh withfooter ytop istop rgap16">
  {#if events && events.length > 0}
    <div class="grid three cgap32 rgap32">
      {#each events as item}
        <div class="column rgap16">

          {#if item.meta.image}
            <img src={item.meta.image} alt={item.meta.title} class="event-image" />
          {/if}
          <h5>{item.meta.title}</h5>
          <p class="greyed">{item.meta.description}</p>
          <p class="small bold">{item.formattedDate}</p>
          {#if item.meta.google_form_link}
            <a href={item.meta.google_form_link} target="_blank" rel="noreferrer">
              <button>Register Here</button>
            </a>
          {/if}

          <a href={item.meta.link} target="_blank" rel="noreferrer">Read More</a>
        </div>
      {/each}
    </div>
  {/if}
</div>