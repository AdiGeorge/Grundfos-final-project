<template>
    <div class="footer_container">
        <div class="logo-quote">
            <img src="../assets/logo-footer.png" alt="logo footer">
            <p>
                <span>“</span>Our new Design Library is the single source of truth which <br>
                groups all the elements that will allow our teams to design, realize and develop innovative
                products.<span>”</span> <br>
                <br>
                Tenna Kjeldsen
            </p>
        </div>
        <div class="footer_nav">
            <ul>
                <li><strong>Front</strong></li>
                <li>Updates</li>
                <li>Suggestions</li>
            </ul>
            <ul>
                <li><strong>Guidelines</strong></li>
                <li>General</li>
                <li>Layout</li>
                <li>Content</li>
            </ul>
            <ul>
                <li><strong>Components</strong></li>
                <li>General</li>
                <li>Navigation</li>
                <li>Layout</li>
                <li>Data display</li>
            </ul>
            <ul>
                <li><strong>Resources</strong></li>
            </ul>
        </div>
        <div class="social">
            <p>dk.grundfos.com</p>
            <img src="../assets/social.png" alt="socialmedia icons">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="scss" scoped>
    @import "../sass/_colors.scss";
    @import "../sass/_fonts.scss";

   h1,h2,h3,h4,h5,h6,p,a {
     font-family: $main-font;
    
   }

    p,
    li {
      
        list-style-type: none;
         color: #999999;
    }

    .footer_container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 5em;
        padding: 2em;
        border-top: 1px solid #999999;
        justify-items: center;
        padding-left: 2em;
        padding-right: 2em;
        background-color: $white;
        z-index: 999;
        position: absolute;
        width: 80% ;
        right: 0;
    }

    .logo-quote {
        p {
            font-style: oblique;
            margin-top: 1em;
            span {
                font-size: 2.2em;
            }
        }
    }

    .footer_nav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 2em;
    }

    .social {
        justify-self: end;
    }
</style>