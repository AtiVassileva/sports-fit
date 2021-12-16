export const defaultMinLength = 3;
export const defaultMaxLength = 100;

export const paragraphsMaxLength = 100000;

export const passwordMinLength = 6;

export const invalidPasswordMessage =  `Password should contain at least ${passwordMinLength} symbols!`;

export const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const invalidEmailMessage = 'Invalid email address!';

export const invalidTitleMessage = `Title should be between 
${defaultMinLength} and ${defaultMaxLength} characters!`;

export const invalidUrlMessage = 'Please enter a valid URL!';

export const invalidNameMessage = `Name should be between 
${defaultMinLength} and ${defaultMaxLength} characters!`;

export const invalidContentMessage = `Content should be between 
${defaultMinLength} and ${paragraphsMaxLength} characters!`;

export const invalidDescriptionMessage = `Description should be between 
${defaultMinLength} and ${paragraphsMaxLength} characters!`;