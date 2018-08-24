import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Pagination',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Pagination</h3>
      <a-pagination :page-count="10" v-model="pagination.default"></a-pagination>
      <a-pagination :page-count="10" v-model="pagination.danger"></a-pagination>
    </div>
    `,
    data () {
      return {
        pagination: {
          default: 1,
          danger: 3
        }
      }
    }
  })
)
