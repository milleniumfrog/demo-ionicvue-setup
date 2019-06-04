import { getRenderedText } from '../helperfunctions';
import AppList from '../../../src/components/applist.vue';
import Ionic from '@ionic/vue';
import Vue from 'vue';

jest.mock('ionicons');
Vue.use(Ionic);

describe('<AppList />', () => {

    describe('check if shown text matches passed properties', () => {
        it('Property: apps', () => {
            // only one array element
            expect(getRenderedText(AppList, {
                apps: [{
                    title: 'test',
                    id: 'adsbfsdasdfasdf',
                }],
            }).trim()).toEqual('test');
            // empty array
            expect(getRenderedText(AppList, {
                apps: [],
            }).trim()).toEqual('');
            // bigger array
            expect(getRenderedText(AppList, {
                apps: [{
                    title: 'test1',
                    id: 'adsbfsdasdfasdf',
                },
                {
                    title: 'test2',
                    id: 'adsbfsdasdfasdf2',
                },
            ],
            }).trim()).toEqual('test1\n    \n        test2');
        });
    });

});
