import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Switch',
  () => ({
    template: `
    <div class="section pb-0 section-components">
        <div class="container mb-5">
            <h3 class="h3 font-weight-bold mb-4">Toggle buttons</h3>
            <div>
              <a-switch v-model="switches.off"></a-switch>
              <span class="clearfix"></span>
              <a-switch v-model="switches.on"></a-switch>
            </div>
        </div>
    </div>
    `,
    data () {
      return {
        switches: {
          off: false,
          on: true
        }
      }
    }
  })
)
