import {
  storiesOf
} from '@storybook/vue'

storiesOf('Extra Components/', module).addWithJSX(
  'Asyncy Wordmark',
  () => ({
    template: `
      <div class="container">
        <h3 class="h3 font-weight-bold mb-4">Asyncy Wordmark</h3>
        <a-wordmark></a-wordmark>
      </div>
      `
  })
)
