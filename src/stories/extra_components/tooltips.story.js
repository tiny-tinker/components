import { storiesOf } from '@storybook/vue'

storiesOf('Extra Components/', module).addWithJSX(
  'ToolTips',
  () => ({
    template: `
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
            <small class="d-block text-uppercase font-weight-bold mb-3">Tooltips</small>
            <a-button size="sm" type="primary" class="btn-tooltip"
                        v-a-tooltip.hover.left title="Tooltip on left">On left
            </a-button>
            <a-button size="sm" type="primary" class="btn-tooltip"
                        v-a-tooltip.hover.top title="Tooltip on top">On top
            </a-button>
            <a-button size="sm" type="primary" class="btn-tooltip"
                        v-a-tooltip.hover.bottom title="Tooltip on bottom">On bottom
            </a-button>
            <a-button size="sm" type="primary" class="btn-tooltip"
                        v-a-tooltip.hover.right title="Tooltip on right">On right
            </a-button>
        </div>
        <div class="col-lg-6 mt-4 mt-lg-0">
            <small class="d-block text-uppercase font-weight-bold mb-3">Popovers</small>
            <a-button size="sm" type="default"
                        v-a-popover.hover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                        title="Popover On Left">On left
            </a-button>

            <a-button size="sm" type="default"
                        v-a-popover.hover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                        title="Popover On Left">On left
            </a-button>

            <a-button size="sm" type="default"
                        v-a-popover.hover.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                        title="Popover On Top">On top
            </a-button>
            <a-button size="sm" type="default"
                        v-a-popover.hover.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                        title="Popover On right">On right
            </a-button>
            <a-button size="sm" type="default"
                        v-a-popover.hover.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                        title="Popover On bottom">On bottom
            </a-button>
        </div>
      </div>
    </div>
    `
  })
)
