import { storiesOf } from '@storybook/vue'

storiesOf('Components/Basic Elements/', module).addWithJSX(
  'Alert',
  () => ({
    template: `
    <div class="container">
      <h3 class="h4 text-success font-weight-bold mb-5">Alerts</h3>
      <a-alert type="success" icon="ni ni-like-2" dismissible>
          <span slot="text"><strong>Success!</strong> This is a success alert—check it out!</span>
      </a-alert>

      <a-alert type="info" icon="ni ni-bell-55" dismissible>
          <span slot="text"><strong>Info!</strong> This is an info alert—check it out!</span>
      </a-alert>

      <a-alert type="warning" icon="ni ni-bell-55" dismissible>
          <span slot="text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
      </a-alert>

      <a-alert type="danger" icon="ni ni-support-16" dismissible>
          <span slot="text"><strong>Danger!</strong> This is an error alert—check it out!</span>
      </a-alert>
    </div>
    `
  })
)
