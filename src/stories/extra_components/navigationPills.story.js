import { storiesOf } from '@storybook/vue'

storiesOf('Extra Components/', module).addWithJSX(
  'Navigation Pills',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Navigation Pills</h3>
      <a-tabs :fill="false" circle>
          <a-tab-pane>
              <span slot="title" class="nav-link-icon d-block"><i class="ni ni-atom"></i></span>
          </a-tab-pane>
          <a-tab-pane>
              <span slot="title" class="nav-link-icon d-block"><i class="ni ni-chat-round"></i></span>
          </a-tab-pane>
          <a-tab-pane>
              <span slot="title" class="nav-link-icon d-block"><i
                      class="ni ni-cloud-download-95"></i></span>
          </a-tab-pane>
      </a-tabs>
    </div>
    `
  })
)
