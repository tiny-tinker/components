import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Slider',
  () => ({
    template: `
    <div class="section pb-0 section-components">
        <div class="container mb-5">
            <h3 class="h3 font-weight-bold mb-4">Sliders</h3>
            <div>
              <a-slider v-model="sliders.slider1">

              </a-slider>
              <!-- Range slider -->
              <div class="mt-5">
                  <!-- Range slider container -->
                  <a-slider v-model="sliders.slider2" :range="{min: 0, max: 500}">

                  </a-slider>
              </div>
            </div>
        </div>
    </div>
    `,
    data () {
      return {
        sliders: {
          slider1: 0,
          slider2: [150, 400]
        }
      }
    }
  })
)
