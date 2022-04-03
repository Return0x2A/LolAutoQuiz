<script lang="ts">
  import Questionnaire from "./components/Questionnaire.svelte";
  import Status from "./components/Status.svelte";
  import type { Chat } from "./models/chat.model";
  import type { Race } from "./models/race.model";
  import { ChatService } from "./services/chat.service";


  let round: number;
  let cat : Chat;
  let reponses: Race[];
  let questionnaire: Promise<{question: Chat, reponses: Race[]}>;

async function getNextQuestion() : Promise<{question: Chat, reponses: Race[]}> {
    round++;
    let choix = Math.floor(Math.random() * 4);
    reponses = await ChatService.get4RandomBreeds();
    cat = await ChatService.getCatByBreed(reponses[choix]);
    
    return {question: cat, reponses: reponses };
 };
    

questionnaire = getNextQuestion();

</script>

<main>
  <Questionnaire questionnaire={questionnaire} />
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
