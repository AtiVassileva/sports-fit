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
            })
    })


    return (
        <div>
            <Title imageUrl={article.imageUrl}
                title={article.title}
            />
            <Content content={article.content}
                path="/blog"
                id={match.params.id}
            />
        </div>
    );
}

export default ArticleDetails;