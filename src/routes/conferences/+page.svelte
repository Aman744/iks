<!----<script>
  import { onMount } from "svelte";

  let page = "/Conferencepage/index.html";

  onMount(() => {
    // Select the main navbar safely
    const mainNavbar = document.querySelector(".main-navbar");

    if (mainNavbar) {
      mainNavbar.style.display = "none"; // Hide navbar if found
    }

    // Restore navbar when leaving the page
    window.addEventListener("beforeunload", () => {
      const navbar = document.querySelector(".main-navbar");
      if (navbar) {
        navbar.style.display = "block"; // Show navbar back when leaving the page
      }
    });
  });
</script>-->

<!---style>
  iframe {
    width: 100%;
    height: 100vh;
    border: none;
    display: block;
  }
</!->-->

<!-- Embed the Conference Page -->
<!---<iframe src={page} title="Conferences"></iframe>-->

<!----NEW SCRIPT FOR DIRECT PAGE LOADS---->
<script>
  import { onMount } from "svelte";

  let conferenceURL = "/Conferencepage/index.html"; // Your actual conference page

  onMount(() => {
    window.location.href = conferenceURL; // Redirects the user immediately
  });
</script>