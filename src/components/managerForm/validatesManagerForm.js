export const alphaNumeric = value => (value && /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(value) ? undefined : 'Недопустимые символы');

export const required = value => value || typeof value === 'string' ? undefined : 'Обязательно для заполнения';

export const numeric = value => (value && /^[0-9]+$/.test(value) ? undefined : 'Недопустимые символы');

