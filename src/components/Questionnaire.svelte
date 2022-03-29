<script lang="ts">

</script>
<div class="container">
    <div class="question">Contenu de la question ? </div>
    <div class="reponse" style="background-color: #ffc8dd;">
        Réponse 1
    </div>
    <div class="reponse" style="background-color: #ffafcc;">Réponse 2 </div>
    <div class="reponse" style="background-color: #bde0fe;">Réponse 3</div>
    <div class="reponse" style="background-color: #a2d2ff;">Réponse 4</div>
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
        min-height: 180px;
    }
    .reponse{
        display: flex;
        align-items: center;
        justify-content: inherit;
        flex-grow: 1;
        margin-top: 5px;
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