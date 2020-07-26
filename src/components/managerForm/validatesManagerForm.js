export const alphaNumeric = value => (value && /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(value) ? undefined : 'form-control-warning');

export const required = value => value || typeof value === 'string' ? undefined : 'form-control-error';

export const numeric = value => (value && /^[0-9]+$/.test(value) ? undefined : 'form-control-warning');
