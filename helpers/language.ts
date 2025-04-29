export enum LanguageCode {
    cs = 'cs',
    en = 'en',
    sk = 'sk',
    de = 'de',
    fr = 'fr',
    hr = 'hr',
    hu = 'hu',
    it = 'it',
    pl = 'pl',
    ro = 'ro',
    ru = 'ru',
}

export const LanguageLabels: Record<LanguageCode, string> = {
    [LanguageCode.cs]: 'Zapomněli jste heslo?',
    [LanguageCode.en]: 'Forgot your password?',
    [LanguageCode.sk]: 'Zabudli ste heslo?',
    [LanguageCode.de]: 'Passwort vergessen?',
    [LanguageCode.fr]: 'Mot de passe oublié ?',
    [LanguageCode.hr]: 'Zaboravili ste svoju lozinku?',
    [LanguageCode.hu]: 'Elfelejtette jelszavát?',
    [LanguageCode.it]: 'Recupero password',
    [LanguageCode.pl]: 'Odzyskaj hasło?',
    [LanguageCode.ro]: 'Aţi uitat parola?',
    [LanguageCode.ru]: 'Вы забыли пароль?',
};

export function getLanguageLabel(code: LanguageCode): string {
    return LanguageLabels[code];
}
