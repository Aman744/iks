<script lang="ts">

  import { mobileBar, toggleMobilebar, mediaClass } from "$lib/utils/globalstores";
  import Menu from '$lib/icons/menu.svelte'
  import Close from '$lib/icons/close.svelte'

  function handleClose(){
    if ($mediaClass !== 'wide' && $mobileBar) {
      toggleMobilebar()
    }
  }

</script>

<div class="row ycenter xbetween outer padded">

  <a class="row ycenter logo blanker" href="/">
    <img class="logo" src="/images/iksha.png" alt="iksha logo"/>
  </a>

  <div class="row ycenter">
    {#if $mediaClass === 'wide' || $mobileBar}
    <nav class="row ycenter cgap16 mcol mright" on:click={handleClose} on:keydown={handleClose}>
    <p class="small"><a class="blanker" href="/home">HOME</a></p>
    <p class="small"><a class="blanker" href="/about">ABOUT</a></p>
    <p class="small"><a class="blanker" href="/diiksha/index.html">DIIKSHA</a></p>
    <!---<p class="small"><a class="blanker" href="/108phd">108 PHDs</a></p>-->
    <p class="small"><a class="blanker" href="/Conferencepage/index.html">CONFERENCES</a></p>
    <!---<p class="small"><a class="blanker" href="/sangama">SAṄGAMA</a></p>-->
    <!-- SAṄGAMA menu with subtabs -->
    <div class="dropdown">
      <p class="small dropdown-title">
          <a class="blanker" href="/sangama">SAṄGAMA</a>
      </p>
      <ul class="dropdown-menu">
          <li><a class="blanker" href="/sangama/overview">Overview</a></li>
          <li><a class="blanker" href="/sangama/sangama 2023">Sangama 2023</a></li>
          <li><a class="blanker" href="https://www.theiksha.org/events/iksha-sangama-2024">Sangama 2024</a></li>
      </ul>
  </div>
    <p class="small"><a class="blanker" href="/journal">JOURNAL</a></p>
    <!---<p class="small"><a class="blanker" href="/blog">BLOG</a></p>-->
    <p class="small"><a class="blanker" href="/events">IKS NEWS AND EVENTS</a></p>
    <p class="small"><a class="blanker" href="/contact">CONTACT</a></p>
    
  
    </nav>
    {/if}
    {#if $mediaClass !== 'wide'}
      <button class="blanker" on:click={toggleMobilebar}>
        {#if $mobileBar}
        <Close/>
        {:else}
        <Menu/>
        {/if}
      </button>
    {/if}
  </div>

</div>

<style lang="sass">

img.logo
  object-fit: contain
  height: 32px

.outer
  height: 100%

nav
  @media screen and (max-width: 1024px)
    height: calc(100vh - 80px)
    position: fixed
    top: 80px
    right: 0
    background: #FFFFFF
    width: 100%
    z-index: 90
    text-align: right
    padding-top: 48px
    padding-right: 16px
    align-items: flex-end
    row-gap: 16px
    p.small
      font-size: 27px

</style>