import { configure } from '@storybook/vue';
import '../src/assets/scss/asyncy.scss';

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins
import JSXAddon from 'storybook-addon-jsx';
import { setOptions } from '@storybook/addon-options'
import {setAddon, addDecorator} from '@storybook/vue'
import AsyncVue from '../src/index';
Vue.use(AsyncVue);
setAddon(JSXAddon);

setOptions({
  name: 'Asyncy',
  url: 'asyncy.com',
  addonPanelInRight: true,
  sortStoriesByKind: true
})

const styles = {padding: '40px 20px 20px 20px'}
const PaddingDecoration = () => ({
  template:`<div style="padding: 30px 30px 30px 30px">
    <story/>
  </div>`
});

addDecorator(PaddingDecoration);

const req = require.context('../src/', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
