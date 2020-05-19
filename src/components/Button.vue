<template>
  <div class="container_button">
    <nav class="inpage">
      <ul>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#variations">Varations</a></li>
        <li><a href="#live">Live Example</a></li>
        <li><a href="#props">Properties</a></li>
      </ul>
    </nav>
    <h1><strong>Button</strong></h1>
    <p>There are two types of buttons: Solid button and ghost (outlined) buttons. Both types can be with og without an icon.
Solid buttons are used for important actions. Ghost buttons can be used for less important actions. Icons can be added to the
buttons to highlight an action
    </p>
    <h2 id="usage"><strong>Usage</strong></h2>
    <p>Widget buttons are used on selected pages and only when linking to Grundfos widgets. Text and icons can be changed according to the communication needs.
  </p>
    <ul>
      <li>Blue ghost buttons can be used on: white and grey backgrounds.</li>
      <li>White ghost buttons are used on top of: dark image backgrounds and dark gradient backgrounds.</li>
      <li>Blue ghost buttons can be used on: white and grey backgrounds.</li>
      <li>Ghost buttons are used for third level CTAs on a page. </li>
    </ul>
    <section id="variations">
      <h3><strong>Button variations</strong></h3>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Primary button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" @click="component='Button1'">Standard button</a>
          <a class="dropdown-item" @click="component='Button2'">Ghost button</a>
          <a class="dropdown-item" @click="component='Button3'">Disabled button</a>
          <a class="dropdown-item" @click="component='Button4'">Positive button</a>
          <a class="dropdown-item" @click="component='Button5'">Negative button</a>
        </div>
        <component :is="component"></component>
      </div>
      <div class="get-code">
        <button class="btn collapse-btn" type="button" data-toggle="collapse" data-target="#collapseExample"
          aria-expanded="false" aria-controls="collapseExample">
          See code
        </button>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            {{button}} <br><span>{{button2}}</span>{{button3}}
          </div>
        </div>
      </div>
    </section>
    <section id="live">
      <h2><strong>Live Example</strong></h2>
      <video width="1220px" autoplay src="../assets/livebutton.mp4"></video>
    </section>
    <section id="props">
      <h2>Properties</h2>
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
        <p>Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars
          limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own shyness minuter. So
          before remark at depart.v</p>
        <p>string</p>
        <p>""</p>
      </div>
      <div class="prop2">
        <p>color</p>
        <p>color</p>
        <p>Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars
          limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own shyness minuter. So
          before remark at depart.v</p>
        <p>string</p>
        <p>""</p>
      </div>
      <div class="prop3">
        <p>color</p>
        <p>color</p>
        <p>Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars
          limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own shyness minuter. So
          before remark at depart.v</p>
        <p>string</p>
        <p>""</p>
      </div>
    </section>
  </div>

</template>

<script>
  import Button1 from '../components/Button1'
  import Button2 from '../components/Button2'
  import Button3 from '../components/Button3'
  import Button4 from '../components/Button4'
  import Button5 from '../components/Button5'
  export default {
    components: {
      Button1,
      Button2,
      Button3,
      Button4,
      Button5
    },
    data() {
      return {
        component: 'Button1',
        button: `<button type="button" class="elm-button">`,
        button2: `<span class="elm-button__text">Button text</span>`,
        button3: `</button>`
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../sass/_colors.scss";
  @import "../sass/_fonts.scss";

   h1,h2,h3,h4,h5,h6,p,a {
     font-family: $main-font;
     color: #4a4a4a;
   }

  .container_button {
    margin-top: 7em;
    margin-left: 5em;
    margin-right: 20em;

    .inpage {
      position: fixed;
      right: 2em;

      ul {
        li {
          list-style-type: none;
          a {
            text-decoration: none;
            color: $black;
          }
        }
      }
    }

    h2 {
      margin-top: 2em;
    }

    li {
      list-style-type: circle;
      margin-left: 3em;
      padding-left: .5em;
    }
  }

  #variations {
    margin-top: 4em;
  }

  .btn {
    color: $orange;
    background-color: $white;
    width: 100%;
    border: 2px solid $orange;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .show>.btn-secondary.dropdown-toggle {
    background-color: $white;
    color: $orange;
    border: 2px solid $orange;
    box-shadow: none;
  }

  .dropdown-menu {
    width: 100%;
  }

  .get-code {
    border-bottom: 1px solid $borders;
    border-left: 1px solid $borders;
    border-right: 1px solid $borders;
    padding: .4em;
  }

  .collapse-btn {
    width: 6em;
    border: 1px solid $black;
    color: $black;
  }

  .card {
    font-family: $secondary-font;
    font-weight: 600;
    background-color: #333333;
    color: $white;
    margin-top: .5em;

    span {
      padding-left: 1em;
    }
  }

  video {
    margin-top: 2em;
    margin-right: 20em;
  }

  .title {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid $borders;
    margin-top: 2em;

  }

  .prop1,
  .prop2,
  .prop3 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid $borders;
    padding-top: 1em;
  }
</style>