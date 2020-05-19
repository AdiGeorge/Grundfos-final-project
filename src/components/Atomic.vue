<template>
    <div class="atomic_container">
        <h1><strong>Introduction</strong></h1>
        <p>The goal of this section is to use the same consistent style on all our applications and communication
            materials.
            These guidances aim to share the code and the vocabulary of UI elements so as to allow teams to create and
            communicate with each other in the most efficient way. They also provide help to every new staff joining
            Grundfos team.
            In a nutshell, applying these directions should facilitate the workflow as well as creating a visual and
            conceptual unity essential to delivering a clear and coherent message to our users.
        </p>
        <section class="component-types">
            <h3><strong>Component types</strong></h3>
            <p>Grundfos Design System is based on the Atomic Design principles developed by Brad Frost. Atomic Design
                methodology involves breaking an interface layout down into its basic components, which are then reused
                throughout the same interface. The main point in using this method is to create a flexible and
                future-proof design elements without reinventing the wheel.<br><br>
                Atomic Design vocabulary and structure has been invented by analogy to atomic theory. Like in chemistry,
                each element of the layout is basically classified according to its own composition.
            </p>
            <img src="../assets/atomic.svg" alt="Atomic">
            <p class="levels">There are five distinct levels in atomic design:</p>
            <ul>
                <li>Atoms</li>
                <li>Molecules</li>
                <li>Organisms</li>
                <li>Layouts</li>
                <li>Pages</li>
            </ul>
        </section>
        <section class="atoms">
            <h5><strong>Atoms</strong></h5>
            <p>Atoms are the must irreducible elements of a web interface. Like in chemistry, they are the tiniest
                building blocks. Atoms refer to the basic HTML tags such as an input text field or a button. They are
                totally useless on their own, and yet once combined with others, they form the base of every interface
                elements. Also, as all the elements should easily adapt any component size and context.</p>
            <div class="atoms-img">
                <img src="../assets/buttonatom.svg" alt="Button atom">
                <img src="../assets/searchatom.svg" alt="Search atom">
            </div>
        </section>
        <section class="atoms">
            <h5><strong>Molecules</strong></h5>
            <p>Molecules are groups of atoms bonded together in a way that they form the smallest functional units. A
                form group, for instance, is a molecule which combines two atoms (an input text field and a label).</p>
            <div class="atoms-img">
                <img class="moleculeimg" src="../assets/moleculeimg.svg" alt="Molecule img">
            </div>
        </section>
        <section class="atoms">
            <h5><strong>Organisms</strong></h5>
            <p>Organisms are basically a set of molecules joined together to form a relatively complex but coherent
                section of an interface. For example, a form group molecule combined with a title , a link and a button
                can make a login organism.</p>
            <div class="atoms-img">
                <img class="moleculeimg" src="../assets/organismimg.svg" alt="Organism img">
            </div>
        </section>
        <section class="atoms">
            <h5><strong>Layouts</strong></h5>
            <p>Templates consist of groups of organisms fasten together to build pages. It's at this level that we start
                to appreciate the layout in action.</p>
            <div class="atoms-img">
                <img class="moleculeimg" src="../assets/layoutimg.svg" alt="Layout img">
            </div>
        </section>
        <section class="atoms">
            <h5><strong>Pages</strong></h5>
            <p>Pages are specific instances of templates filled with example contents to illustrate how the finish
                interface might look. Here place holder content is replaced with a real representative content to give
                an accurate depiction of what a user will ultimately see.</p>
            <div class="atoms-img">
                <img class="moleculeimg" src="../assets/pageimg.svg" alt="Page img">
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    @import "../sass/_fonts.scss";

   h1,h2,h3,h4,h5,h6,p,a {
     font-family: $main-font;
     color: #4a4a4a;
   }

    .atomic_container {
        margin-top: 7em;
        margin-left: 5em;
        margin-right: 20em;
    }

    .component-types {
        margin-top: 3em;

        img {
            width: 80%;
            margin-top: 2em;
        }

        .levels {
            margin-top: 2em;
        }

        ul {
            li {
                list-style-type: circle;
                margin-left: 3em;
                padding-left: .5em;
            }
        }
    }

    .atoms {
        margin-top: 4em;
    }

    .atoms-img {
        display: flex;
        justify-content: center;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 2em;

        img {
            border: 1px solid #3AAFE8;
            padding: 3em;
            width: 30%;
        }
    }

    .moleculeimg {
        width: 50% !important;
    }
</style>