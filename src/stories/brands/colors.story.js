import { storiesOf } from '@storybook/vue'

storiesOf('Brands/', module).addWithJSX(
  'Colors',
  () => ({
    template: `
    <div class="container">
      <h3 class="h4 font-weight-bold mb-5">Colors</h3>
      <a-card class="mb-3">
        <p class="text-primary">.text-primary</p>
        <p class="text-secondary">.text-secondary</p>
        <p class="text-success">.text-success</p>
        <p class="text-danger">.text-danger</p>
        <p class="text-warning">.text-warning</p>
        <p class="text-info">.text-info</p>
        <p class="text-light bg-dark">.text-light</p>
        <p class="text-dark">.text-dark</p>
        <p class="text-muted">.text-muted</p>
        <p class="text-white bg-dark">.text-white</p>
      </a-card>
      <p>Contextual text classes also work well on anchors with the provided hover and focus states.
        <strong>
          Note that the .text-white and .text-muted class has no link styling.
        </strong>
      </p>
      <a-card>
        <p><a href="#" class="text-primary">Primary link</a></p>
        <p><a href="#" class="text-secondary">Secondary link</a></p>
        <p><a href="#" class="text-success">Success link</a></p>
        <p><a href="#" class="text-danger">Danger link</a></p>
        <p><a href="#" class="text-warning">Warning link</a></p>
        <p><a href="#" class="text-info">Info link</a></p>
        <p><a href="#" class="text-light bg-dark">Light link</a></p>
        <p><a href="#" class="text-dark">Dark link</a></p>
        <p><a href="#" class="text-muted">Muted link</a></p>
        <p><a href="#" class="text-white bg-dark">White link</a></p>
      </a-card>
      <h3 class="h4 font-weight-bold mb-5">Background color</h3>
      <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities do not set color, so in some cases you’ll want to use .text-* utilities.
      </p>
      <a-card>
        <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
        <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
        <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
        <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
        <div class="p-3 mb-2 bg-info text-white">.bg-info</div>
        <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
        <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
        <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
      </a-card>
      <h3 class="h4 font-weight-bold mb-5">Background gradient</h3>
      <a-card>
        <div class="p-3 mb-2 bg-gradient-primary text-white">.bg-gradient-primary</div>
        <div class="p-3 mb-2 bg-gradient-secondary text-white">.bg-gradient-secondary</div>
        <div class="p-3 mb-2 bg-gradient-success text-white">.bg-gradient-success</div>
        <div class="p-3 mb-2 bg-gradient-danger text-white">.bg-gradient-danger</div>
        <div class="p-3 mb-2 bg-gradient-warning text-dark">.bg-gradient-warning</div>
        <div class="p-3 mb-2 bg-gradient-info text-white">.bg-gradient-info</div>
        <div class="p-3 mb-2 bg-gradient-light text-dark">.bg-gradient-light</div>
        <div class="p-3 mb-2 bg-gradient-dark text-white">.bg-gradient-dark</div>
      </a-card>
    </div>
    </div>
    `
  })
)
