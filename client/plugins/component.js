import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import Icon from '@/components/Icon.vue'
import Nav from '@/components/Nav.vue'
import BackTop from '@/components/BackTop.vue'
import Tag from '@/components/Tag.vue'

Vue.use(VueCompositionApi);
Vue.component('Icon', Icon)
Vue.component('Nav', Nav)
Vue.component('BackTop',BackTop)
Vue.component('Tag',Tag)
