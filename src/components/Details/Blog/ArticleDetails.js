import { useState, useEffect } from 'react';
import * as blogService from '../../../services/blogService';
import Content from "../Content";
import Title from "../Title";

const ArticleDetails = ({
    match
}) => {

    const [article, setArticle] = useState({});

    useEffect(() => {
        let id = match.params.id;

        blogService.findArticle(id)
            .then(article => {
                setArticle(article);
            });

        setArticle({});

    }, [match.params.id]);

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