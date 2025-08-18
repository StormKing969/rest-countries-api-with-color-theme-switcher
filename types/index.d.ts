export interface CountryObj {
  name: string;
  topLevelDomain: Array<string>;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: Array<string>;
  capital: string;
  altSpellings: Array<string>;
  subregion: string;
  region: string;
  population: number;
  latitude_longitude: Array<number>;
  demonym: string;
  area: number;
  timezones: Array<string>;
  borders: Array<string>;
  nativeName: string;
  numericCode: string;
  flags: FlagObj;
  currencies: Array<CurrencyObj>;
  languages: Array<LanguageObj>;
  translations: TranslationObj;
  flag: string;
  regionalBlocs: Array<RegionalBlocObj>;
  cioc: string;
  independent: boolean;
}

interface FlagObj {
  svg: string;
  png: string;
}

interface CurrencyObj {
  code: string;
  name: string;
  symbol: string;
}

interface LanguageObj {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface TranslationObj {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}

interface RegionalBlocObj {
  acronym: string;
  name: string;
}