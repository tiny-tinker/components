import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Checkbox',
  () => ({
    template: `
    <div class="section pb-0 section-components">
        <div class="container mb-5">
            <h3 class="h3 font-weight-bold mb-4">Checkboxes</h3>
            <div>
              <a-checkbox class="mb-3" v-model="checkboxes.unchecked">
                  Unchecked
              </a-checkbox>
              <a-checkbox class="mb-3" v-model="checkboxes.checked">
                  Checked
              </a-checkbox>

              <a-checkbox class="mb-3" v-model="checkboxes.uncheckedDisabled" disabled>
                  Unchecked
              </a-checkbox>
              <a-checkbox class="mb-3" v-model="checkboxes.checkedDisabled" disabled>
                  Checked
              </a-checkbox>
            </div>
        </div>
    </div>
    `,
    data () {
      return {
        checkboxes: {
          unchecked: false,
          checked: true,
          uncheckedDisabled: false,
          checkedDisabled: true
        }
      }
    }
  })
)
