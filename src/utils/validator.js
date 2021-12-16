import * as constants from './validationConstants';

export const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(constants.validEmailRegex) 
    ? null
    : constants.invalidEmailMessage;
}

export const validatePassword = (password) => {
    if (password.length < constants.passwordMinLength) {
        return constants.invalidPasswordMessage;
    }

    return null;
}

export const validateTitle = (title) => {
    if (title.length < constants.defaultMinLength 
        || title.length > constants.defaultMaxLength) {
        return constants.invalidTitleMessage;
    }

    return null;
}

export const validateImageUrl = (imageUrl) => {
    try {
        new URL(imageUrl);
    } catch (error) {
        return constants.invalidUrlMessage;
    }

    return null;
}

export const validateContent = (content) => {
    if (content.length < constants.defaultMinLength 
        || content.length > constants.paragraphsMaxLength) {
        return constants.invalidContentMessage;
    }

    return null;
}

export const validateName = (name) => {
    if (!name || name.length < constants.defaultMinLength 
        || name.length > constants.defaultMaxLength) {
        return constants.invalidNameMessage;
    }

    return null;
}

export const validateDescription = (description) => {
    if (description.length < constants.defaultMinLength 
        || description.length > constants.paragraphsMaxLength) {
        return constants.invalidDescriptionMessage;
    }

    return null;
}