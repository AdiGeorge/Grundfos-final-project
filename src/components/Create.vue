<template>
    <div class="createnew_container">
        <h2>Component name</h2>
        <v-col cols="12" md="6">
            <v-textarea name="input-7-1" label="Component name" hint="Hint text"></v-textarea>
        </v-col>
        <h3>When and how to use?</h3>
        <v-container-field class="container-field">
            <v-col cols="12">
                <v-textarea solo name="input-7-4"></v-textarea>
            </v-col>
            <img src="../assets/text-icons.svg" alt="text-icons">
        </v-container-field>
        <section class="variations">
            <h3>Variations</h3>
            <div class="tabs">
                <button><strong>+ Add new</strong></button>
                <button>Regular</button>
                <button>Underlined</button>
                <button>Extended</button>
                <button>Error</button>
            </div>
            <div class="upload">
                <img src="../assets/upload.svg" alt="upload img">
                <p>Upload your code here</p>
                <div class="items-upload">
                    <p>tab.html</p>
                    <p>x</p>
                </div>
                <div class="upload2 items-upload">
                    <p>tab.css</p>
                    <p>x</p>
                </div>
            </div>
            <p class="color-code"><strong>+ Add color code</strong><span>#FFFFFF</span></p>
        </section>
        <section class="live-example">
            <h3>Live examples</h3>
            <div class="upload">
                <div class="devices">
                    <p class="mobile">Mobile</p>
                    <p>Desktop</p>
                </div>
                <img src="../assets/upload.svg" alt="upload img">
                <p>Upload your mock-ups here</p>
                <div class="items-upload">
                    <p>frontpage.png</p>
                    <p>x</p>
                </div>
                <div class="upload2 items-upload">
                    <p>check-out.png</p>
                    <p>x</p>
                </div>
                <div class="upload3 items-upload">
                    <p>animation.mov</p>
                    <p>x</p>
                </div>
            </div>
        </section>
        <section id="props">
            <h3>Properties</h3>
            <p><strong>+ Add new property</strong></p>
            <div class="title">
                <p><strong>Properties</strong></p>
                <p><strong>Attribute</strong></p>
                <p><strong>Description</strong></p>
                <p><strong>Type</strong></p>
                <p><strong>Default</strong></p>
            </div>
            <div class="prop1">
                <p>color</p>
                <p>color</p>
                <p>Cordially convinced did incommode existence put out suffering certainly. Besides another and saw
                    ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own
                    shyness minuter. So before remark at depart.v</p>
                <p>string</p>
                <p>""</p>
            </div>
            <div class="prop2">
                <p>color</p>
                <p>color</p>
                <p>Cordially convinced did incommode existence put out suffering certainly. Besides another and saw
                    ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own
                    shyness minuter. So before remark at depart.v</p>
                <p>string</p>
                <p>""</p>
            </div>
            <div class="prop3">
                <p>color</p>
                <p>color</p>
                <p>Cordially convinced did incommode existence put out suffering certainly. Besides another and saw
                    ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own
                    shyness minuter. So before remark at depart.v</p>
                <p>string</p>
                <p>""</p>
            </div>
        </section>
        <div class="publish">
            <button class="draft-btn">Save as draft</button>
            <button class="publish-btn">Publish</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../sass/_colors.scss";
    @import "../sass/_fonts.scss";

   h1,h2,h3,h4,h5,h6,p,a {
     font-family: $main-font;
   }

    .createnew_container {
        margin-top: 7em;
        margin-left: 5em;
        margin-right: 20em;
    }

    h3 {
        margin-top: 3em;
        font-size: 1.5em;
        margin-bottom: 1em;
    }

    .container-field {
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 1px solid #c9c9c9;
        justify-items: center;
        img {

            align-self: flex-start;
            padding-bottom: .5em;
            padding-left: 1em;
        }
    }

    .col-12 {
        padding: 0;
    }

    .tabs {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 5em;
        button {
            border: 2px solid #c9c9c9;
            padding: .7em;
            border-radius: 10px;
            box-sizing: border-box;
        }
    }

    .upload {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #c9c9c9;
        padding: 20px;
        margin-top: 2em;
    }

    .items-upload {
        display: flex;
        justify-content: space-between;
        background-color: $almost-white;
        width: 80%;
        border-radius: 20px;
        p {
            margin: 0;
            padding: 10px;
            padding-left: 20px;
            padding-right: 20px;
            font-weight: 600;
        }
    }

    .upload2,
    .upload3 {
        margin-top: 1em
    }

    .color-code {
        margin-top: 1em;
        span {
            border: 2px solid $borders;
            border-radius: 8px;
            box-sizing: border-box;
            padding: 5px;
            margin-left: 1em;
        }
    }

    .devices {
        display: flex;
        align-self: flex-start;
        border-bottom: 1px solid $borders;
        width: 100%;
        p {
            padding-right: 20px;
            cursor: pointer;
        }
        .mobile {
            color: $orange;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                width: 75%;
                height: 3px;
                background-color: $orange;
                bottom: -16px;
                left: 0;
            }
        }
    }

    .live-example {
        .upload {
            img {
                margin-top: 1em;
            }
        }
    }

    .title {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        border-bottom: 1px solid #c9c9c9;
        margin-top: 2em;
    }

    .prop1,
    .prop2,
    .prop3 {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        border-bottom: 1px solid #c9c9c9;
        padding-top: 1em;
    }

    .publish {
        display: flex;
        justify-content: center;
        margin-top: 3em;
        .draft-btn {
            color: #1271FF;
            font-weight: 700;
            margin-right: 50px;
        }

        .publish-btn {
            background-color: $blue;
            color: $white;
           padding-top: 8px;
           padding-bottom: 8px;
            padding-left: 15px;
            padding-right: 15px;
            font-weight: 700;
            margin-left: 50px;
            border-radius: 10px;
            width: 10%;
        }
    }
</style>