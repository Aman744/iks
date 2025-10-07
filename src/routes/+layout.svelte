<script lang="ts">

  import '$lib/styles/globals.sass'
  import '$lib/styles/typo.sass'
	import { mediaClass } from '$lib/utils/globalstores';
  import Header from '$lib/comps/header.svelte'
  import Footer from '$lib/comps/footer.svelte'

	let iW: number;
	$: $mediaClass = iW >= 1025 ? 'wide' : iW >= 769 && iW <= 1024 ? 'mid' : 'small';

</script>

<svelte:window bind:innerWidth={iW} />

<header class="bordbot">
<Header/>
</header>

<main>
<slot/>
</main>

<footer>
<Footer/>
</footer>

<style lang="sass">

main
  min-height: calc(100vh - 144px)

header
  height: 80px
  margin-bottom: -80px
  border-bottom: 1px solid #e7e7e7
  background: #FFFFFF
  position: sticky
  top: 0
  z-index: 999

footer
  height: 64px

</style>