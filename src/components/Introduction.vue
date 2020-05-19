<template>
    <div class="intro_container">
        <div class="hero_image">
            <div class="hero_text">
                <h1>Guidelines</h1>
            </div>
        </div>
        <div class="intro-text">
            <p>
                The design guidelines and principles are the foundation for web/online designs under the Grundfos brand.
                The principles must serve as a guide for designers when working with Grundfos’s online
                Touchpoints.<br><br>
                The purpose of these Online Design Guidelines is to strengthen our internal and external online
                communication and the Grundfos brand by ensuring a consistent experience across all online touchpoints-
                from the local Grundfos websites, online sales and marketing tools, the Ecademy training
                program and throughout our range of digital products.
            </p>
            <p>The Grundfos digital experience is based on 4 design principles taken as starting points in key
                initiatives:</p>
            <ul>
                <li>Our digital experience is coherent and recognisable across platforms to enhance the perception of
                    our premium brand.
                </li>
                <li>Our digital solutions are simple and intuitive. They are optimized for helping customers through key
                    user journeys efciently.
                </li>
                <li>We know our customers and our digital solutions bring value to the individual user</li>
                <li>Our solutions are designed to match the diferent platforms our customers use.</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../sass/_colors.scss";
    @import "../sass/_fonts.scss";

   h1,h2,h3,h4,h5,h6,p,a {
     font-family: $main-font;
     color: #4a4a4a;
   }

    .intro_container {
        margin-top: 5em;
    }

    h1 {
        color: $dark-grey;
        margin-bottom: 1.3em;
        font-size: 3.5em;
        font-weight: 700;
    }

    .intro-text {
        margin-top: 3em;
        margin-left: 5em;
        margin-right: 15em;
    }

    img {
        width: 100%;
    }

    li {
          padding-left: 1.2em;
            padding-top: .2em;
            list-style: circle;
            margin-left: 3em;
    }

    p {
        margin-top: 2em;
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
</style>