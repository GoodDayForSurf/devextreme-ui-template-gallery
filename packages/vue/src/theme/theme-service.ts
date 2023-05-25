import { currentTheme as currentVizTheme, refreshTheme } from 'devextreme/viz/themes';
import { ref } from 'vue';
import './styles/app-theme-light.scss';

const themes = ['light', 'dark'] as const;

type ThemeMode = typeof themes[number];
export type Theme = {type: 'material' | 'generic', color: string, mode?: ThemeMode};

const loadStylesImports = ({ type, color, mode }: Theme) => {
  console.log('--loadStylesImports-------->', [type, color, mode]);
  return import(`devextreme/dist/css/dx.${type}.${color}.${mode}.compact.css`);
};

const loadTest = (themeName = 'dx.material.lime.dark') => import(`devextreme/dist/css/${themeName}.compact.css`);

function getNextTheme(theme?: ThemeMode) {
  return themes[themes.indexOf(theme as ThemeMode) + 1] || themes[0];
}

class ThemeService {
  private readonly storageKey = 'app-theme';

  private readonly themeMarker = 'theme-';

  readonly availableThemes = [
    { type: 'material', color: 'blue' },
    { type: 'material', color: 'lime' },
    { type: 'material', color: 'orange' },
    { type: 'generic', color: 'blue' },
  ];

  isStylesLoaded = ref(false);

  currentMode = ref<ThemeMode>(this.getCurrentMode());

  currentColor = ref<string>(this.getCurrentTheme().color);

  constructor() {
    loadStylesImports(this.getCurrentTheme()).then(() => {
      this.isStylesLoaded.value = true;
      this.setAppTheme();

      console.log('-----getThemeStyleSheets----->', this.getThemeStyleSheets());
      /*      setTimeout(() => {
        loadTest('dx.material.blue.dark').then(() => {
          console.log('-----getThemeStyleSheets--2--->', this.getThemeStyleSheets());
        });
      }, 5000); */
    });
  }

  getCurrentTheme(): Theme {
    const storedTheme = window.localStorage[this.storageKey];

    return storedTheme ? JSON.parse(storedTheme) : { type: 'material', color: 'blue', mode: 'light' };
  }

  getCurrentMode(): ThemeMode {
    return this.getCurrentTheme().mode || getNextTheme();
  }

  isThemeStyleSheet = (styleSheet: CSSStyleSheet, theme: ThemeMode | '' = '') => !!styleSheet?.href?.includes(`${this.themeMarker + theme}`);

  private getThemeStyleSheets() {
    return Array.from(document.styleSheets).filter(
      (stylesheet) => this.isThemeStyleSheet(stylesheet),
    );
  }

  setAppTheme({
    type = this.getCurrentTheme().type,
    color = this.getCurrentTheme().color,
    mode = this.currentMode.value,
  } = this.getCurrentTheme()) {
    this.getThemeStyleSheets().forEach((styleSheet) => {
      styleSheet.disabled = !this.isThemeStyleSheet(styleSheet, mode);
    });

    this.currentMode.value = mode;

    window.localStorage[this.storageKey] = JSON.stringify({ type, color, mode });

    currentVizTheme(currentVizTheme().replace(/\.[a-z]+\.compact$/, `.${mode}.compact`));
    refreshTheme();
  }

  switchAppThemeMode() {
    this.setAppTheme({ ...this.getCurrentTheme(), mode: getNextTheme(this.currentMode.value) });
  }
}

export const themeService = new ThemeService();
