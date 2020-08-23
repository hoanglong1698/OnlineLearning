import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import localesResourse from '../assets/locales';
import * as Localization from 'expo-localization';

const languageDetector = {
    type: "languageDetector",
    detect: () => Localization.locale,
    init: () => { },
    cacheUserLanguage: () => { }
};

i18n
    .use(reactI18nextModule)
    .use(languageDetector)
    .init({
        resources: localesResourse,
        fallbackLng: "vi",
        debug: true,
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true
        }
    });

export default i18n;

export const changeLaguage = (languageKey) => {
    i18n.changeLanguage(languageKey) // -> returns a Promise
}