import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Radio',
  () => ({
    template: `
    <div class="section pb-0 section-components">
        <div class="container mb-5">
            <h3 class="h3 font-weight-bold mb-4">Radios</h3>
            <div>
              <a-radio name="radio0" class="mb-3" v-model="radio.radio1">
                  Unchecked
              </a-radio>

              <a-radio name="radio1" class="mb-3" v-model="radio.radio1">
                  Checked
              </a-radio>

              <a-radio name="radio2" class="mb-3" v-model="radio.radio2" disabled>
                  Disabled unchecked
              </a-radio>

              <a-radio name="radio3" class="mb-3" v-model="radio.radio2" disabled>
                  Disabled checked
              </a-radio>
            </div>
        </div>
    </div>
    `,
    data () {
      return {
        radio: {
          radio1: 'radio1',
          radio2: 'radio3'
        }
      }
    }
  })
)
