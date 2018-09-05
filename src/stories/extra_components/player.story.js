import { storiesOf } from '@storybook/vue'
import BigBuck from '@assets/video/BigBuckBunny.mp4'
import PosterImage from '@assets/img/video-player/video-placeholder.png'

storiesOf('Extra Components/', module).addWithJSX(
  'Player',
  () => ({
    template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Video Player</h3>
      <a-player>
        <video :poster="poster" :src="videoSrc">
            <source :src="videoSrc" type="video/mp4">
        </video>
      </a-player>
    </div>
    `,
    data () {
      return {
        videoSrc: BigBuck,
        poster: PosterImage
      }
    }

  })
)
