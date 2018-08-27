import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Cookies Banner',
  () => ({
    template: `
    <div class="section pb-0 section-components">
        <div class="container mb-5">
            <h3 class="h3 font-weight-bold mb-4">Cookies Banner</h3>
            <div>
              <a-cookies-banner :force-active="true" />
            </div>
        </div>
    </div>
    `
  })
)
