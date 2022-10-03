import { NativeModules, Platform } from "react-native";
import * as translations from "../assets/translations.json";

type TranslationKey = keyof typeof translations;

export class i18N {
  // fr_FR | en_US | ...
  private static locale: string =
    Platform.OS === "ios"
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  private static readonly defaultLanguage = "en"; // If the current locale in device is not "fr" or "en"
  private static readonly availableLanguages = ["en", "fr"];

  public static getCurrentLocale = () => this.locale;

  public static getCurrentLanguage = () => this.locale.split("_")[0];

  public static getTranslations = () => translations;

  public static isLocale = (locale: string) =>
    this.availableLanguages.includes(locale);

  public static t = (translationKey: string) => {
    const _translationKey = translationKey as TranslationKey;
    const _translation = this.getTranslations()[_translationKey];
    if (_translation === undefined) {
      throw new I18NError(
        "Couldn't access translation message with key " + translationKey
      );
    }
    type LanguageKey = keyof typeof _translation;
    const _langKey: LanguageKey = (
      this.isLocale(this.getCurrentLanguage())
        ? this.getCurrentLanguage()
        : this.defaultLanguage
    ) as LanguageKey;
    return _translation[_langKey];
  };
}

export class I18NError extends Error {
  constructor(errorMessage: string) {
    super(errorMessage);
  }
}
