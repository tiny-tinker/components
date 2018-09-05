import { storiesOf } from '@storybook/vue'
import githubSvg from '@assets/img/icons/common/github.svg'
import googleSvg from '@assets/img/icons/common/google.svg'

storiesOf('Components/', module).addWithJSX(
  'Modal',
  () => ({
    template: `
    <div class="container">
      <div class="row">
          <div class="col-md-4">
              <a-button block type="primary" class=" mb-3" @click="modals.modal1 = true">
                  Default
              </a-button>
              <a-modal :show.sync="modals.modal1">
                  <h6 slot="header" class="modal-title" id="modal-title-default">Type your modal title</h6>

                  <p>Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                      right at the coast of the Semantics, a large language ocean.</p>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                      regelialia. It is a paradisematic country, in which roasted parts of sentences
                      fly into your mouth.</p>

                  <template slot="footer">
                      <a-button type="primary">Save changes</a-button>
                      <a-button type="link" class="ml-auto" @click="modals.modal1 = false">Close
                      </a-button>
                  </template>
              </a-modal>
          </div>
          <div class="col-md-4">
              <a-button block type="warning" class=" mb-3" @click="modals.modal2 = true">
                  Notification
              </a-button>

              <a-modal :show.sync="modals.modal2"
                    gradient="danger"
                    modal-classes="modal-danger modal-dialog-centered">
                  <h6 slot="header" class="modal-title" id="modal-title-notification">Your attention is required</h6>

                  <div class="py-3 text-center">
                      <i class="ni ni-bell-55 ni-3x"></i>
                      <h4 class="heading mt-4">You should read this!</h4>
                      <p>A small river named Duden flows by their place and supplies it with the
                          necessary regelialia.</p>
                  </div>

                  <template slot="footer">
                      <a-button type="white">Ok, Got it</a-button>
                      <a-button type="link"
                                  text-color="white"
                                  class="ml-auto"
                                  @click="modals.modal2 = false">
                          Close
                      </a-button>
                  </template>
              </a-modal>
          </div>
          <div class="col-md-4">
              <a-button block type="default" class=" mb-3" @click="modals.modal3 = true">
                  Form
              </a-button>

              <a-modal :show.sync="modals.modal3"
                    body-classes="p-0"
                    modal-classes="modal-dialog-centered modal-sm">
                  <a-card type="secondary" shadow
                        header-classes="bg-white pb-5"
                        body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                      <template>
                          <div class="text-muted text-center mb-3">
                              <small>Sign in with</small>
                          </div>
                          <div class="btn-wrapper text-center">
                              <a-button type="neutral">
                                  <img slot="icon" :src="githubSvg">
                                  Github
                              </a-button>

                              <a-button type="neutral">
                                  <img slot="icon" :src="googleSvg">
                                  Google
                              </a-button>
                          </div>
                      </template>
                      <template>
                          <div class="text-center text-muted mb-4">
                              <small>Or sign in with credentials</small>
                          </div>
                          <form role="form">
                              <a-input alternative
                                          class="mb-3"
                                          placeholder="Email"
                                          addon-left-icon="ni ni-email-83">
                              </a-input>
                              <a-input alternative
                                          type="password"
                                          placeholder="Password"
                                          addon-left-icon="ni ni-lock-circle-open">
                              </a-input>
                              <a-checkbox>
                                  Remember me
                              </a-checkbox>
                              <div class="text-center">
                                  <a-button type="primary" class="my-4">Sign In</a-button>
                              </div>
                          </form>
                      </template>
                  </a-card>
              </a-modal>
          </div>
      </div>
    </div>
    `,
    data () {
      return {
        modals: {
          modal1: false,
          modal2: false,
          modal3: false
        },
        githubSvg,
        googleSvg
      }
    }
  })
)
