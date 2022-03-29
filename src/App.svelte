<script lang="ts">
import Questionnaire from "./components/Questionnaire.svelte";
import Status from "./components/Status.svelte";

</script>

<main>
  <!-- svelte-ignore missing-declaration -->
  <Questionnaire></Questionnaire>
  <!-- svelte-ignore missing-declaration -->
  <Status>

  </Status>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    
    text-align: center;
    padding: 0;
    margin: 0 auto;
  }

  @media (min-width: 480px) {
  }
</style>
