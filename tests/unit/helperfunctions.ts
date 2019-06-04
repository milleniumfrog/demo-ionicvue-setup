import Vue, { VueConstructor } from 'vue';
import Ionic from '@ionic/vue';

export function getRenderedText(component: VueConstructor, propsData: any): string {
    const Constructor = Vue.extend(component);
    const vm = new Constructor({ propsData }).$mount();
    return vm.$el.textContent || '';
}