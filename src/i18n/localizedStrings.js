import LocalizedStrings from 'react-localization';
import { sreenEN } from './enLanguage'
import { sreenJP } from './jpLanguage'
export const strings = new LocalizedStrings({
    jp: {
        screen: sreenJP
    },
    en: {
        screen: sreenEN
    },
})