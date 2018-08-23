import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Badge',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-5">Labels</h3>
      <a-badge type="primary" class="text-uppercase">Primary</a-badge>
      <a-badge type="success" class="text-uppercase">Success</a-badge>
      <a-badge type="danger" class="text-uppercase">Danger</a-badge>
      <a-badge type="warning" class="text-uppercase">Warning</a-badge>
      <a-badge type="info" class="text-uppercase">Info</a-badge>
    </div>
    `
  })
)
