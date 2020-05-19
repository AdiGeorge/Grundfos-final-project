<template>
    <div class="intro_container">
        <div class="hero_image">
            <div class="hero_text">
                <h1>Components</h1>
                <p class="subheader">Use the filter option in order to sort and find the right components</p>

            </div>
        </div>
        <p class="intro-text">
            The components are rooted in our company’s updated corporate visual identity to ensure consistency with
            ofine media and the brand’s visual identity as a whole. In practical terms, these guidelines provide a
            complete online design framework consisting of clearly defned basic online elements and rules for using
            these. The basic online elements include boxes, forms, fonts, buttons, headers, tabs and other elements,
            used in the diferent digital solutions. The rules govern when, where and how these elements are used in
            online materials and solutions.<br><br>

            These pages are organised around the online elements, and provides usage rules and examples of each
            individual element. Libraries, style components and additional materials required for designing in Sketch
            can be found in Grundfos World of Marketing.<br><br>

            The Grundfos digital modules, components and elements are the building blocks of the Grundfos Design System.
            The building blocks are
            used across designs, decks and cards and unite the Grundfos digital experience.
        </p>
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
     color: #4a4a4a;
   }

    .intro_container {
        margin-top: 5em;
        .intro-text{
              padding-left: 5em;
              padding-right:  10em;;
        }
    }

    .hero_image {
        background-image: url(../assets/cmp-bg.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: start;
        align-items: center;
        padding-left: 5em;
        z-index: -1;
        margin-bottom: 3em;


    }

        h1 {
            font-size: 3.5em;
            color: $dark-grey;
            font-weight: 700;
        }

        .subheader {
            font-weight: 500;
            font-size: 1em;
        }


    
</style>