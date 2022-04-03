<script lang="ts">
  import Questionnaire from "./components/Questionnaire.svelte";
  import Status from "./components/Status.svelte";
  import { ChatService } from "./services/chat.service";

  let cat = ChatService.getRandomCat();
  let races = ChatService.get4RandomBreed();

</script>

<main>
	<Questionnaire chamage={cat}></Questionnaire>
  {#await races}
    <p> Chargement des races... </p>
    {:then lesRaces}
    <p>Quel est la race de ce chat ? </p>
    {lesRaces}
  {/await}
  <Status />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

	:global(body) {
    overflow: hidden;
    padding: 0;
    margin: 0 auto;
	}

  main {
    text-align: center;
    padding: 0;
    margin: 0 auto;
  }

  @media (min-width: 480px) {
  }

</style>
