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
          <div class="col-lg-6 col-md-6 col-sm-12 mt-5 mt-lg-0">
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
          <div class="col-lg-6 col-md-6 col-sm-12 mt-5 mt-lg-0">
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
          <div class="col-lg-10 col-md-6 col-sm-12 mt-5 mt-lg-5">
            <div class="mb-3">
                <small class="text-uppercase font-weight-bold">With underlined text</small>
            </div>
            <a-tabs center bold tabShape="links" class="flex-column flex-md-row">
                <a-card shadow>
                    <a-tab-pane title="Serverless HTTP">
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth.</p>
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                    </a-tab-pane>

                    <a-tab-pane title="Slack Bot">
                        <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                            american apparel, butcher voluptate nisi qui.</p>
                    </a-tab-pane>

                    <a-tab-pane title="Machine Learning">
                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth.</p>
                    </a-tab-pane>
                </a-card>
            </a-tabs>
          </div>
          <div class="col-lg-10 col-md-6 col-sm-12 mt-5 mt-lg-5">
            <div class="mb-3">
              <small class="text-uppercase font-weight-bold">With Icon only</small>
            </div>
            <a-tabs center bold tabNavLinkClasses="color-gray" tabShape="icon-only" class="flex-column flex-md-row">
              <a-card shadow>
                <a-tab-pane title="Serverless HTTP">
                  <template slot="title">
                    <div class="h4">
                      <i class="fa fa-windows mr-2"></i>
                    </div>                    
                  </template>
                  <p class="description">Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                      cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                      keffiyeh dreamcatcher synth.</p>
                  <p class="description">Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                </a-tab-pane>

                <a-tab-pane title="Slack Bot">
                  <template slot="title">
                    <div class="h4">
                      <i class="fa fa-apple mr-2"></i>
                    </div>  
                  </template>
                    <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                        squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                        american apparel, butcher voluptate nisi qui.</p>
                </a-tab-pane>

                <a-tab-pane title="Machine Learning">
                  <template slot="title">
                    <div class="h4">
                      <i class="fa fa-linux mr-2"></i>
                    </div>
                  </template>
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
