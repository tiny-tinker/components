import { storiesOf } from '@storybook/vue'
import team1 from '../static/img/theme/team-1-800x800.jpg'
import team2 from '../static/img/theme/team-2-800x800.jpg'
import team3 from '../static/img/theme/team-3-800x800.jpg'
import team4 from '../static/img/theme/team-4-800x800.jpg'

storiesOf('Extra Components/', module).addWithJSX(
  'Image',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-5">Images</h3>
      <div class="row">
        <div class="col-sm-3 col-6">
            <small class="d-block text-uppercase font-weight-bold mb-4">Image</small>
            <img v-lazy="team1" alt="Rounded image" class="img-fluid rounded shadow"
                 style="width: 150px;">
        </div>
        <div class="col-sm-3 col-6">
            <small class="d-block text-uppercase font-weight-bold mb-4">Circle Image</small>
            <img v-lazy="team2" alt="Circle image"
                 class="img-fluid rounded-circle shadow" style="width: 150px;">
        </div>
        <div class="col-sm-3 col-6 mt-5 mt-sm-0">
            <small class="d-block text-uppercase font-weight-bold mb-4">Raised</small>
            <img v-lazy="team3" alt="Raised image" class="img-fluid rounded shadow-lg"
                 style="width: 150px;">
        </div>
        <div class="col-sm-3 col-6 mt-5 mt-sm-0">
            <small class="d-block text-uppercase font-weight-bold mb-4">Circle Raised</small>
            <img v-lazy="team4" alt="Raised circle image"
                 class="img-fluid rounded-circle shadow-lg" style="width: 150px;">
        </div>
    </div>
    </div>
    `,
    data () {
      return {
        team1,
        team2,
        team3,
        team4
      }
    }
  })
)
