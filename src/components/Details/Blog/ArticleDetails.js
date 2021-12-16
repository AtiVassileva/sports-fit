import { useState, useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import * as blogService from '../../../services/blogService';
import Content from "../Content";
import Title from "../Title";

const ArticleDetails = ({
    match
}) => {
    const [article, setArticle] = useState({});
    const handleError = useErrorHandler();

    useEffect(() => {
        let id = match.params.id;

        try {
            blogService.findArticle(id)
                .then(article => {
                    setArticle(article);
                });
        } catch (error) {
            console.log(error);
            handleError(error);
        }

        setArticle({});

    }, [handleError, match.params.id]);

    return (
        <div>
            <Title
                author={article.author}
                imageUrl={article.imageUrl}
                title={article.title}
                date={article.date}
            />
            <Content
                author={article.author}
                content={article.content}
                path="/blog"
                id={match.params.id}
            />
        </div>
    );
}

export default ArticleDetails;