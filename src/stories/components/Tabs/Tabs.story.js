import {
  storiesOf
} from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Tabs',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Tabs</h3>
      <div class="row justify-content-center">
          <div class="col-lg-6">
              <!-- Tabs with icons -->
              <div class="mb-3">
                  <small class="text-uppercase font-weight-bold">With icons</small>
              </div>
              <a-tabs fill class="flex-column flex-md-row">
                  <a-card shadow slot-scope="{activeTabIndex}">
                      <a-tab-pane key="tab1">
                          <template slot="title">
                              <i class="ni ni-cloud-upload-96 mr-2"></i>Home
                          </template>

                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                              cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                              keffiyeh dreamcatcher synth.</p>
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                      </a-tab-pane>

                      <a-tab-pane key="tab2">
                          <template slot="title">
                              <i class="ni ni-bell-55 mr-2"></i>Profile
                          </template>

                          <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                              squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                              american apparel, butcher voluptate nisi qui.</p>
                      </a-tab-pane>

                      <a-tab-pane key="tab3">
                          <template slot="title">
                              <i class="ni ni-calendar-grid-58 mr-2"></i>Messages
                          </template>

                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                              cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                              keffiyeh dreamcatcher synth.</p>
                      </a-tab-pane>
                  </a-card>
              </a-tabs>
          </div>
          <div class="col-lg-6 mt-5 mt-lg-0">
              <!-- Menu -->
              <div class="mb-3">
                  <small class="text-uppercase font-weight-bold">With text</small>
              </div>
              <a-tabs fill class="flex-column flex-md-row">
                  <a-card shadow>
                      <a-tab-pane title="Home">
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                              cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                              keffiyeh dreamcatcher synth.</p>
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                      </a-tab-pane>

                      <a-tab-pane title="Profile">
                          <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                              squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                              american apparel, butcher voluptate nisi qui.</p>
                      </a-tab-pane>

                      <a-tab-pane title="Messages">
                          <p class="description">Raw denim you probably haven't heard of them jean shorts
                              Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                              cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                              keffiyeh dreamcatcher synth.</p>
                      </a-tab-pane>
                  </a-card>
              </a-tabs>
          </div>
      </div>
    </div>
    `
  })
)