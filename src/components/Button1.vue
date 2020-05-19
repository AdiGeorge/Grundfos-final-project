<template>
    <div class="button_container">
        <div class="btn_options">
            <div class="btn_text">
                <p>Small</p>
                <p>Medium</p>
                <p>Big</p>
            </div>
            <img src="../assets/options_button.png" alt="Button1">
        </div>
        <div class="btn_section">
            <button>BUTTON TEXT</button>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import "../sass/_colors.scss";
    @import "../sass/_fonts.scss";

   h1,h2,h3,h4,h5,h6,p,a {
     font-family: $main-font;
   }

    .btn_options {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid $borders;
        border-left: 1px solid $borders;
        border-right: 1px solid $borders;
        align-items: center;
        padding: 1em;
        margin-top: 1.5em;
        img {
            width: 15%;
            height: 15%;
        }
        .btn_text {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 2em;
            text-align: center;
            align-items: center;
            p {
                margin: 0;
            }
        }
    }

    .btn_section {

        border: 1px solid $borders;
        height: 20em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        background-color: $dark-blue;
        border: none;
        color: $white;
        padding: 1em;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        font-weight: 700;
        margin: 4px 2px;
        cursor: pointer;
        padding-left: 2em;
        padding-right: 2em;
    }
</style>