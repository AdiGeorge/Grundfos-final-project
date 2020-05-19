<template>
    <div class="tools_container">
        <section class="tools">
            <h2>Tools</h2>
            <div class="tools_grid">
                <div class="figma">
                    <img src="../assets/figma.png" alt="figma img">
                    <div class="text-figma">
                        <h4>Figma</h4>
                        <p>Cordially convinced did incommode existence put out suffering certainly. </p>
                    </div>
                </div>
                <div class="figma">
                    <img src="../assets/invision.png" alt="invision img">
                    <div class="text-figma">
                        <h4>Invision</h4>
                        <p>Cordially convinced did incommode existence put out suffering certainly.</p>
                    </div>
                </div>
                <div class="figma">
                    <img src="../assets/sketch.png" alt="sketch img">
                    <div class="text-figma">
                        <h4>Sketch</h4>
                        <p>Cordially convinced did incommode existence put out suffering certainly.</p>
                    </div>
                </div>
            </div>
            <p>
                The servants securing material goodness her. Saw principles themselves ten are possession. So endeavor
                to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if conviction
                on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated occasional
                entreaties end.
            </p>
        </section>
        <section class="values">
            <h2>Values</h2>
            <p>
                The servants securing material goodness her. Saw principles themselves ten are possession. So endeavor
                to continue cheerful doubtful we to. Turned advice the set vanity why mutual.
            </p>
            <ul>
                <li>Occasional diminution announcing new now literature terminated</li>
                <li>Lady am room head so lady four or eyes an</li>
                <li>No projection as up preference reasonably delightful</li>
                <li>Do separate removing or expenses in</li>
            </ul>
        </section>
        <section class="workflow">
            <h2>Workflow</h2>
            <img src="../assets/workflow.png" alt="workflow img">
            <p>
                The servants securing material goodness her. Saw principles themselves ten are possession. So endeavor
                to continue cheerful doubtful we to. Turned advice the set vanity why mutual.
            </p>
            <div class="workflow_text">
                <h5>Raw design</h5>
                <p>
                    The servants securing material goodness her. Saw principles themselves ten are possession. So
                    endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if
                    conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated
                    occasional entreaties end.
                </p>
                <h5>Design review</h5>
                <p>
                    The servants securing material goodness her. Saw principles themselves ten are possession. So
                    endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if
                    conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated
                    occasional entreaties end.
                </p>
                <h5>Iterations</h5>
                <p>
                    The servants securing material goodness her. Saw principles themselves ten are possession. So
                    endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if
                    conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated
                    occasional entreaties end.
                </p>
                <h5>Development/Translation</h5>
                <p>
                    The servants securing material goodness her. Saw principles themselves ten are possession. So
                    endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if
                    conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated
                    occasional entreaties end.
                </p>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    @import "../sass/_fonts.scss";
    @import "../sass/_colors.scss";
   h1,h2,h3,h4,h5,h6,p,a {
     font-family: $main-font;
   }

    .tools_container {
        margin-top: 7em;
        margin-left: 5em;
        margin-right: 20em;
    }

    .tools_grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 5em;
        margin-top: 3em;
        width: 80%;
        margin-bottom: 2em;
        img {
            width: 100%;
        }
    }

    .figma {
        border: 1px solid $orange
    }

    .text-figma {
        display: flex;
        flex-direction: column;
        border-top: 1px solid $orange;
        padding: 1em;
        p {
            margin: 0;
        }
    }

    .values {
        margin-top: 5em;
        margin-right: 15em;
    }

    li {
        list-style-type: circle;
        margin-left: 3em;
        padding-left: .5em;
    }

    .workflow {
        margin-right: 15em;
        margin-top: 5em;
        img {
            margin-top: 2em;
            width: 80%;
            display: block;
            margin: auto;
        }
        p {
            margin: 0;
        }
    }

    .workflow_text {
        margin-top: 2em;
        p {
            margin-bottom: 2em;
        }
    }
</style>