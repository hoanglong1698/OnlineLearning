import { themes } from './../../globals/constants';

export const themeService = (theme) => {
    if (theme === "Light") {
        return themes.light
    }

    if (theme === "Dark") {
        return themes.dark
    }
}