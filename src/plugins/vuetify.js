import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#D6D6D6',
                secondary: '#929292',
                accent: '#618BFF',
                accent_2: '#2757FF',
            },
            dark: {
                primary: '#424242',
                secondary: '#252525',
                accent: '#618BFF',
                accent_2: '#2757FF',
            }
        }
    }
});
