import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Progress',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Progress bars</h3>
      <a-progress :value="40" label="Task completed"></a-progress>
      <a-progress type="primary" :value="60" label="Task completed"></a-progress>
    </div>
    `
  })
)
