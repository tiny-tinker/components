import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Button',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Buttons</h3>
      <div>
        <a-button type="primary">Button</a-button>
        <a-button class="btn-3" type="primary" icon="ni ni-bag-17">Button</a-button>
        <a-button class="btn-2" type="primary" icon="ni ni-bag-17"></a-button>
        <div class="mb-3 mt-5">
            <small class="text-uppercase font-weight-bold">Pick your size</small>
        </div>

        <a-button type="primary" size="sm">Small</a-button>
        <a-button type="primary">Regular</a-button>
        <a-button type="primary" size="lg">Large Button</a-button>
        <div class="mb-3 mt-5">
            <small class="text-uppercase font-weight-bold">Pick your color</small>
        </div>
        <a-button class="btn-1" type="primary">Primary</a-button>
        <a-button class="btn-1" type="info">Info</a-button>
        <a-button class="btn-1" type="success">Success</a-button>
        <a-button class="btn-1" type="warning">Warning</a-button>
        <a-button class="btn-1" type="danger">Danger</a-button>
        <a-button class="btn-1" type="neutral">Neutral</a-button>

        <div class="mb-3 mt-5">
            <small class="text-uppercase font-weight-bold">Outline</small>
        </div>

        <a-button class="btn-1" outline type="primary">Outline Primary</a-button>
        <a-button class="btn-1" outline type="info">Outline Info</a-button>
        <a-button class="btn-1" outline type="success">Outline Success</a-button>
        <a-button class="btn-1" outline type="warning">Outline Warning</a-button>
        <a-button class="btn-1" outline type="danger">Outline Danger</a-button>
        <a-button class="btn-1" outline type="neutral">Outline Neutral</a-button>
        <!-- Button links -->
        <div class="mb-3 mt-5">
            <small class="text-uppercase font-weight-bold">Links</small>
        </div>
        <a href="#" class="btn btn-link text-default">Default</a>
        <a href="#" class="btn btn-link text-primary">Primary</a>
        <a href="#" class="btn btn-link text-info">Info</a>
        <a href="#" class="btn btn-link text-success">Success</a>
        <a href="#" class="btn btn-link text-warning">Warning</a>
        <a href="#" class="btn btn-link text-danger">Danger</a>
      </div>
    </div>
    `
  })
)
