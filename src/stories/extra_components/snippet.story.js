import { storiesOf } from '@storybook/vue'

storiesOf('Extra Components/', module).addWithJSX(
  'Snippet',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-5">Snippet</h3>
      <a-snippet 
        center
        size="lg"
        prependText="$"
        value="brew install asyncy/brew/asyncy"
      ></a-snippet>
    </div>
    `
  })
)
