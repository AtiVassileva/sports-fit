export const validateTitle = (title) => {

    if (title.length < 3 || title.length > 100) {
        return 'Title should be between 3 and 100 characters!';
    }

    return null;
}

export const validateImageUrl = (imageUrl) => {
    try {
        new URL(imageUrl);
    } catch (error) {
        return 'Please enter a valid URL!';
    }

    return null;
}

export const validateContent = (content) => {

    if (content.length < 3 || content.length > 10000) {
        return 'Content should be between 3 and 10000 characters!';
    }

    return null;
}