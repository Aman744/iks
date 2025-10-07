<script lang="ts">

  export let data

</script>

<div class="padded column container100vh ytop istop rgap32">
  <h1>{data.title}</h1>
  <svelte:component this={data.content}/>
</div>