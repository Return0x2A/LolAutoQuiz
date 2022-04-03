<script lang="ts">
    import type { Chat } from "src/models/chat.model";
    import type { Race } from "src/models/race.model";

    export let questionnaire: Promise<{question: Chat, reponses: Race[]}>;
    let question: Promise<Chat>;
</script>

<div class="container">
    {#await questionnaire }
        <p>Chargement...</p>
    {:then questionnaire}
    <div class="question">
        {#if questionnaire.question != null}
                <img src="{questionnaire.question.url}" alt="chat avec des poils" height="100%">
        {:else}
                <p>Erreur de chargement...</p>
        {/if}
    </div>

    <div class="reponse" style="background-color: #ffc8dd;">
        <p>{questionnaire.reponses[0].nom}</p>
    </div>

    <div class="reponse" style="background-color: #ffafcc;">
        <p>{questionnaire.reponses[1].nom}</p>
    </div>
    <div class="reponse" style="background-color: #bde0fe;">
        <p>{questionnaire.reponses[2].nom}</p>
    </div>
    <div class="reponse" style="background-color: #a2d2ff;">
        <p>{questionnaire.reponses[3].nom}</p>
    </div>
    {/await}
</div>

<style lang="scss">
    .container {
        font-weight: bold;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        width: 100%;
    }
    .question{
        display: flex;
        background-color: #cdb4db;
        align-items: center;
        justify-content: inherit;
        border-radius: 1em;
        width: 100%;
        min-width: 380px;
        min-height: 300px;
    }
    .reponse{
        display: flex;
        align-items: center;
        justify-content: inherit;
        flex-grow: 1;
        margin-top: 2px;
        cursor: pointer;
        min-width: 380px;
        min-height: 80px;
        width: 50%;
    &:hover{
        color: rgb(66, 7, 51);
        font-size: 1.1em;
    }

    }

    @media (min-width: 380px) {
        .question {
            height: 50px;
        }
    }
</style>