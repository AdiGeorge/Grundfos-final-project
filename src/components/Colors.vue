<template>
    <div class="colors_container">
        <h1><strong>Colors</strong></h1>
        <p>Colours are very important for the Grundfos Visual Identity. The blue and grey colours form the foundation of
            the Grundfos colour identity and it is crucial they are used prominently and consistently to create strong
            brand recognition. The colour design guidelines must be used in all graphic elements or when manipulating or
            adding colours to photos/images. Note that the colour guidelines do not cover colours that are a natural
            part of a photo.</p>
        <h2><strong>Base colors</strong></h2>
        <p class="color-text">Blues are used for the Header, links, bars, some backgrounds, buttons and similar
            elements. Corporate Blue is
            ONLY used as the header colour.</p>
        <section class="colors">
            <div class="blue">
                <div>
                    <div class="primary_blue"></div>
                    <div>
                        <p><strong>Primary</strong> <br><span>#0068B4</span></p>
                    </div>
                </div>
                <div>
                    <div class="secondary_blue"></div>
                    <div>
                        <p><strong>Secondary</strong> <br><span>#0A2C4A</span></p>
                    </div>
                </div>
                <div>
                    <div class="tertiary_blue"></div>
                    <div>
                        <p><strong>Tertiary</strong> <br><span>#11497B</span></p>
                    </div>
                </div>
                <div>
                    <div class="four_blue"></div>
                    <div>
                        <p><strong>Quaternary</strong> <br><span>#34648F</span></p>
                    </div>
                </div>
                <div>
                    <div class="five_blue"></div>
                    <div>
                        <p><strong>Quinary</strong> <br><span>#009EE3</span></p>
                    </div>
                </div>
                <div>
                    <div class="six_blue"></div>
                    <div>
                        <p><strong>Senary</strong> <br><span>#6B9BC2</span></p>
                    </div>
                </div>
            </div>
            <p class="color-text">Black and Greys are used for text, backgrounds and bars. Light Greys and White are
                mainly used for
                borders, shadows and backgrounds</p>
            <div class="black">
                <div>
                    <div class="primary_black"></div>
                    <div>
                        <p><strong>Primary</strong> <br><span>#000000</span></p>
                    </div>
                </div>
                <div>
                    <div class="second_black"></div>
                    <div>
                        <p><strong>Secondary</strong> <br><span>#333333</span></p>
                    </div>
                </div>
                <div>
                    <div class="third_black"></div>
                    <div>
                        <p><strong>Tertiary</strong> <br><span>#727272</span></p>
                    </div>
                </div>
                <div>
                    <div class="four_black"></div>
                    <div>
                        <p><strong>Quaternary</strong> <br><span>#999999</span></p>
                    </div>
                </div>
                <div>
                    <div class="five_black"></div>
                    <div>
                        <p><strong>Quinary</strong> <br><span>#C9C9C9</span></p>
                    </div>
                </div>
                <div>
                    <div class="six_black"></div>
                    <div>
                        <p><strong>Senary</strong> <br><span>#D6D6D6</span></p>
                    </div>
                </div>
                <div>
                    <div class="seven_black"></div>
                    <div>
                        <p><strong>Septenary</strong> <br><span>#DEDEDE</span></p>
                    </div>
                </div>
                <div>
                    <div class="eight_black"></div>
                    <div>
                        <p><strong>Octonary</strong> <br><span>#F2F2F2</span></p>
                    </div>
                </div>
                <div>
                    <div class="nine_black"></div>
                    <div>
                        <p><strong>Nonary</strong> <br><span>#F9F9F9</span></p>
                    </div>
                </div>
            </div>
            <p class="color-text">Green is used for the main interaction on a page. Green is also used for stock status.
            </p>
            <div class="green">
                <div>
                    <div class="first_green"></div>
                    <div>
                        <p><strong>Primary</strong> <br><span>#4AA22C</span></p>
                    </div>
                </div>
                <div>
                    <div class="second_green"></div>
                    <div>
                        <p><strong>Secondary</strong> <br><span>#6CD14A</span></p>
                    </div>
                </div>
            </div>
            <p class="color-text">Red is only used for notifcations, like alerts; Orange is the colour of warnings. Red
                and Orange are also used for stock status.</p>
            <div class="red">
                <div>
                    <div class="first_red"></div>
                    <div>
                        <p><strong>Primary</strong> <br><span>#DD0028</span></p>
                    </div>
                </div>
                <div>
                    <div class="second_red"></div>
                    <div>
                        <p><strong>Secondary</strong> <br><span>#F49500</span></p>
                    </div>
                </div>
            </div>
        </section>
        <div class="usage">
            <h2><strong>Usage</strong></h2>
            <p>Base colors should be accessed using <strong>'t-color'</strong> sass function and refer to the colors
                defined
                in the <strong>$s-colors</strong> map.</p>
            <div class="example">
                <span>EXAMPLE (SCSS)</span>
                <p>.selector { color: t-color(grey); ... }</p>
            </div>
            <p>In order to maintain consistency, several role colors have been defined for <strong> backgrounds,
                    borders, buttons, links </strong>and <strong> text </strong>.</p>
            <ul>
                <li>The <strong>'t-color-border'</strong> mixin should be used to define a <strong>border-color</strong>
                    (colors defined by the <strong>$s-colors-border</strong> map).</li>
                <li>The <strong>'t-color-background'</strong> mixin should be used to define a
                    <strong>background-color</strong> (colors defined by the <strong>$s-colors-background</strong> map).
                </li>
                <li>The <strong>'t-color-button'</strong> mixin should be used to define <strong>button colors</strong>
                    (colors defined by the <strong>$s-colors-button</strong> map).</li>
                <li>The <strong>'t-color-link'</strong> mixin should be used to define a <strong>link color</strong>
                    (colors defined by the <strong>$s-colors-link</strong> map).</li>
                <li>The <strong>'t-color-text'</strong> mixin should be used to define a <strong>text color</strong>
                    (colors defined by the <strong>$s-colors-text</strong> map).</li>
            </ul>
            <p><strong>NOTE:</strong> Role colors have a color or map value for when a color has multiple shades. The
                second function parameter defines the shade, defauling to the <strong>'primary'</strong> value if
                omitted.</p>
            <div class="example example2">
                <span>EXAMPLE (SCSS)</span>
                <p>.selector { background-color: t-color-background(default); border-color: t-color-border(default,
                    dark); color: t-color-text(subtle, light); }</p>
            </div>
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

    @mixin colors {
        width: 140px;
        height: 120px;
    }

    @mixin layout-grid-colors {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        justify-items: center;
        grid-gap: 1em;
    }

    h1 {
        color: #4a4a4a;
    }

    h2 {
        margin-top: 2em;
        color: #4a4a4a;
    }

    p {
        margin-bottom: 1.3em;
       color: #4a4a4a;
    }

    .color-text {
        padding-top: 1.2em;
    }

    .colors_container {
        margin-top: 7em;
        margin-left: 5em;
        margin-right: 15em;
    }

    .blue {
        @include layout-grid-colors;
    }

    .primary_blue {
        @include colors;
        background-color: #0068b4;
    }

    .secondary_blue {
        @include colors;
        background-color: #0A2C4A;
    }

    .tertiary_blue {
        @include colors;
        background-color: #11497B;
    }

    .four_blue {
        @include colors;
        background-color: #34648F;
    }

    .five_blue {
        @include colors;
        background-color: #009EE3;
    }

    .six_blue {
        @include colors;
        background-color: #6b9bc2;
    }

    .black {
        @include layout-grid-colors;
    }

    .primary_black {
        @include colors;
        background-color: #000000;
    }

    .second_black {
        @include colors;
        background-color: #333333;
    }

    .third_black {
        @include colors;
        background-color: #727272;
    }

    .four_black {
        @include colors;
        background-color: #999999;
    }

    .five_black {
        @include colors;
        background-color: #c9c9c9;
    }

    .six_black {
        @include colors;
        background-color: #d6d6d6;
    }

    .seven_black {
        @include colors;
        background-color: #dedede;
    }

    .eight_black {
        @include colors;
        background-color: #f2f2f2;
    }

    .nine_black {
        @include colors;
        background-color: #f9f9f9;
    }

    .green {
        @include layout-grid-colors;
    }

    .first_green {
        @include colors;
        background-color: #4aa22c;
    }

    .second_green {
        @include colors;
        background-color: #6CD14A;
    }

    .red {
        @include layout-grid-colors;
    }

    .first_red {
        @include colors;
        background-color: #dd0028
    }

    .second_red {
        @include colors;
        background-color: #f49500
    }

    .usage {
        li {
            list-style-type: circle;
            margin-left: 3em;
            padding-left: .5em;
            color: #4a4a4a;
        }
    }

    .example {
        background-color: #333333;
        color: #ffffff;
        padding: 1rem;
        margin-bottom: 1em;
        span {
            color: #F49500;
            margin-bottom: .5rem;
            font-weight: bold;
            font-size: .8em;
        }
        p {
            font-size: 1.2em;
            font-family: $secondary-font;
            margin: 0;
            color: white;
        }
    }

    .example2 {
        overflow-x: auto;
    }
</style>