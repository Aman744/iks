<!----<script>
  import { onMount } from "svelte";
  
  onMount(() => {
    window.location.href = "/diiksha/index.html";
  });
</script>

<p>Redirecting to Diiksha...</p>-->


<script>
  import { onMount } from "svelte";

  onMount(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/diiksha/index.html"); // Ensures a proper redirect
    }
  });
</script>

<p>Redirecting to Diiksha...</p>





<!----<script>
  import { onMount } from "svelte";

  let diikshaURL = "/diiksha/index.html"; // Your actual diiksha page

  onMount(() => {
    window.location.href = diikshaURL; // Redirects the user immediately
  });
</script>-->