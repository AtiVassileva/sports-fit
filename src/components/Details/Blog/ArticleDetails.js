import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as blogService from '../../../services/blogService';
import ErrorPage from '../../Common/ErrorPage';

import Content from "../Content";
import Title from "../Title";


const ArticleDetails = ({
    match
}) => {
    const history = useHistory();

    const [article, setArticle] = useState({});

    const [error, setError] = useState(false);

    useEffect(() => {
        let id = match.params.id;

        blogService.findArticle(id)
            .then(article => {
                article === undefined 
                ? setError(true)
                :setArticle(article);
            })
            .catch(error => history.push('/404'));

        setArticle({});

    }, [history, match.params.id]);

    if (error) {
        return <ErrorPage/>;
    }

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