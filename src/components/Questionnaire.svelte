<script lang="ts">
    import type { Chat } from "src/models/chat.model";

    export let chamage: Promise<Chat>;

</script>

<div class="container">

    <div class="question">
        {#await chamage }
            <p>chargement de la photo...</p>
        {:then chat}
            {#if chat != null}
                <img src="{chat.url}" alt="chat avec des poils" height="100%">
            {:else}
                <p>Erreur de chargement...</p>
            {/if}
        {/await}
    </div>

    <div class="reponse" style="background-color: #ffc8dd;">
        <p>Pyrow</p>
    </div>

    <div class="reponse" style="background-color: #ffafcc;">
        <p>Nana</p>
    </div>
    <div class="reponse" style="background-color: #bde0fe;">
        <p>Lanou</p>
    </div>
    <div class="reponse" style="background-color: #a2d2ff;">
        <p>Un chat</p>
    </div>
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