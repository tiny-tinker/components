import { storiesOf } from '@storybook/vue'
storiesOf('Components/Basic Elements/', module).addWithJSX(
  'Navs',
  () => ({
    template: `
    <div class="section pb-0 section-components">
      <div class="container mb-5">
        <h3 class="h4 text-success font-weight-bold mb-4">Menu</h3>
        <div class="row">
            <div class="col-lg-6">
                <div class="mb-3">
                    <small class="text-uppercase font-weight-bold">With text</small>
                </div>
                <a-nav expand effect="dark" type="primary" round title="Menu">
                    <div class="row" slot="content-header" slot-scope="{closeMenu}">
                        <div class="col-6 collapse-brand">
                            <a href="./index.html">
                                Asyncy
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <a-close-button target="nav-inner-primary" v-on:click="closeMenu">

                            </a-close-button>
                        </div>
                    </div>

                    <ul class="navbar-nav ml-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Discover
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Profile</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="nav-inner-primary_dropdown_1"
                               role="button" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false">Settings</a>
                            <div class="dropdown-menu dropdown-menu-right"
                                 aria-labelledby="nav-inner-primary_dropdown_1">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </a-nav>
            </div>
            <div class="col-lg-6 mt-4 mt-lg-0">
                <div class="mb-3">
                    <small class="text-uppercase font-weight-bold">With icons</small>
                </div>
                <a-nav expand effect="dark" type="success" round title="Menu">
                    <div class="row" slot="content-header" slot-scope="{closeMenu}">
                        <div class="col-6 collapse-brand">
                            <a href="./index.html">
                                Asyncy
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <a-close-button target="nav-inner-primary" v-on:click="closeMenu">

                            </a-close-button>
                        </div>
                    </div>

                    <ul class="navbar-nav ml-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="#">
                                <i class="ni ni-favourite-28"></i>
                                <span class="nav-link-inner--text d-lg-none">Discover</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="#">
                                <i class="ni ni-notification-70"></i>
                                <span class="nav-link-inner--text d-lg-none">Profile</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link nav-link-icon" href="#"
                               id="nav-inner-success_dropdown_1" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="ni ni-settings-gear-65"></i>
                                <span class="nav-link-inner--text d-lg-none">Settings</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right"
                                 aria-labelledby="nav-inner-success_dropdown_1">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </a-nav>
            </div>
        </div>
      </div>

      <div class="container">
            <!-- Navigation -->
            <h2 class="mb-5">
                <span>Navbars</span>
            </h2>
        </div>
        <!-- Navbar default -->
        <a-nav v-for="menu in menus"
                  :key="menu.type"
                  :type="menu.type"
                  effect="dark"
                  expand
                  title="Default Color"
                  class="mt-4"">
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="./index.html">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu">

                    </close-button>
                </div>
            </div>
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="./index.html">
                        Asyncy
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <a-close-button target="nav-inner-primary" v-on:click="closeMenu">

                    </a-close-button>
                </div>
            </div>

            <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        <i class="ni ni-favourite-28"></i>
                        <span class="nav-link-inner--text d-lg-none">Discover</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        <i class="ni ni-notification-70"></i>
                        <span class="nav-link-inner--text d-lg-none">Profile</span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link nav-link-icon" href="#"
                        id="nav-inner-success_dropdown_1" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="ni ni-settings-gear-65"></i>
                        <span class="nav-link-inner--text d-lg-none">Settings</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="nav-inner-success_dropdown_1">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </a-nav>
    </div>
    `,
    data () {
      return {
        menus: [
          { type: 'default' },
          { type: 'primary' },
          { type: 'success' },
          { type: 'danger' },
          { type: 'warning' },
          { type: 'info' }
        ]
      }
    }
  })
)
