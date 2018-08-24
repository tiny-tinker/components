import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Inputs',
  () => ({
    template: `
    <div class="section pb-0 section-components">
        <div class="container mb-5">
            <!-- Inputs -->
            <h3 class="h3 font-weight-bold mb-4">Inputs</h3>
            <div class="mb-3">
                <small class="text-uppercase font-weight-bold">Form controls</small>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <a-input placeholder="Regular">

                    </a-input>
                    <a-input placeholder="Search"
                                addon-left-icon="ni ni-zoom-split-in">
                    </a-input>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a-input placeholder="Regular" disabled>
                    </a-input>
                    <a-input placeholder="Birthday"
                                addon-right-icon="ni ni-zoom-split-in">
                    </a-input>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a-input placeholder="Success" :valid="true">
                    </a-input>

                    <a-input placeholder="Success" :valid="false">
                    </a-input>
                </div>
            </div>
        </div>
        <div class="py-5 bg-secondary">
            <div class="container">
                <!-- Inputs (alternative) -->
                <div class="mb-3">
                    <small class="text-uppercase font-weight-bold">Form controls (alternative)</small>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <a-input alternative
                                    placeholder="Regular">

                        </a-input>
                        <a-input alternative
                                    placeholder="Search"
                                    addon-left-icon="ni ni-zoom-split-in">
                        </a-input>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a-input alternative
                                    placeholder="Regular" disabled>
                        </a-input>
                        <a-input alternative
                                    placeholder="Birthday"
                                    addon-right-icon="ni ni-zoom-split-in">
                        </a-input>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a-input alternative
                                    placeholder="Success" :valid="true">
                        </a-input>

                        <a-input alternative
                                    placeholder="Success" :valid="false">
                        </a-input>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
  })
)
