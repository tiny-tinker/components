import { storiesOf } from '@storybook/vue'

storiesOf('Brands/', module).addWithJSX(
  'Typography',
  () => ({
    template: `
    <div class="container">
      <!-- Typography -->
      <h2 class="mt-lg mb-5">
          <span>Typography</span>
      </h2>
      <h3 class="h3 font-weight-bold">Headings</h3>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Heading 1</small>
          </div>
          <div class="col-sm-9">
              <h1 class="mb-0">Asyncy Design System</h1>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Heading 2</small>
          </div>
          <div class="col-sm-9">
              <h2 class="mb-0">Asyncy Design System</h2>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Heading 3</small>
          </div>
          <div class="col-sm-9">
              <h3 class="mb-0">Asyncy Design System</h3>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Heading 4</small>
          </div>
          <div class="col-sm-9">
              <h4 class="mb-0">Asyncy Design System</h4>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Heading 5</small>
          </div>
          <div class="col-sm-9">
              <h5 class="mb-0">Asyncy Design System </h5>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Heading 6</small>
          </div>
          <div class="col-sm-9">
              <h6 class="mb-0">Asyncy Design System </h6>
          </div>
      </div>
      <!-- Display titles -->
      <h3 class="h3 font-weight-bold mt-md">Display titles</h3>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Display 1</small>
          </div>
          <div class="col-sm-9">
              <h1 class="display-1 mb-0">Asyncy Design System</h1>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Display 2</small>
          </div>
          <div class="col-sm-9">
              <h2 class="display-2 mb-0">Asyncy Design System</h2>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Display 3</small>
          </div>
          <div class="col-sm-9">
              <h3 class="display-3 mb-0">Asyncy Design System</h3>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Display 4</small>
          </div>
          <div class="col-sm-9">
              <h4 class="display-4 mb-0">Asyncy Design System</h4>
          </div>
      </div>
      <!-- Specialized titles -->
      <h3 class="h3 font-weight-bold mt-md">Specialized titles</h3>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Heading</small>
          </div>
          <div class="col-sm-9">
              <h3 class="heading mb-0">Asyncy Design System</h3>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Heading title</small>
          </div>
          <div class="col-sm-9">
              <h3 class="heading-title text-warning mb-0">Asyncy Design System</h3>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Heading seaction</small>
          </div>
          <div class="col-sm-9">
              <div>
                  <h2 class="display-3">Header with small subtitle </h2>
                  <p class="lead text-muted">According to the National Oceanic and Atmospheric Administration,
                      Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
              </div>
          </div>
      </div>
      <!-- Paragraphs -->
      <h3 class="h3 font-weight-bold mt-md">Paragraphs</h3>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Paragraph</small>
          </div>
          <div class="col-sm-9">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, mauris sed molestie dictum, magna nibh elementum nunc, sed rhoncus ipsum sapien nec felis.</p>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Lead text</small>
          </div>
          <div class="col-sm-9">
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, mauris sed molestie dictum, magna nibh elementum nunc, sed rhoncus ipsum sapien nec felis.</p>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Quote</small>
          </div>
          <div class="col-sm-9">
              <blockquote class="blockquote">
                  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                      ante.</p>
                  <footer class="blockquote-footer">Someone famous in
                      <cite title="Source Title">Source Title</cite>
                  </footer>
              </blockquote>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Muted text</small>
          </div>
          <div class="col-sm-9">
              <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate...</p>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Primary text</small>
          </div>
          <div class="col-sm-9">
              <p class="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate...</p>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Info text</small>
          </div>
          <div class="col-sm-9">
              <p class="text-info mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate...</p>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Success text</small>
          </div>
          <div class="col-sm-9">
              <p class="text-success mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate...</p>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Warning text</small>
          </div>
          <div class="col-sm-9">
              <p class="text-warning mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate...</p>
          </div>
      </div>
      <div class="row py-3 align-items-center">
          <div class="col-sm-3">
              <small class="text-uppercase text-muted font-weight-bold">Danger text</small>
          </div>
          <div class="col-sm-9">
              <p class="text-danger mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate...</p>
          </div>
      </div>
    </div>
    `
  })
)
