import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";

import * as dietService from '../../../services/dietService';

import ErrorPage from '../../Common/ErrorPage';
import Content from "../Content";
import Title from "../Title";

const DietDetails = ({
    match
}) => {
    const history = useHistory();

    const [diet, setDiet] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        let id = match.params.id;

        dietService.findDiet(id)
            .then(diet => {
                diet === undefined
                    ? setError(true)
                    : setDiet(diet);
            })
            .catch(error => history.push('/404'));

        setDiet({});
    }, [history, match.params.id]);

    if (error) {
        return <ErrorPage />;
    }

    return (
        <div>
            <Title
                author={diet.author}
                imageUrl={diet.imageUrl}
                title={diet.name}
                date={diet.date}
            />
            <Content
                author={diet.author}
                content={diet.description}
                path="/diets"
                id={match.params.id}
            />
        </div>
    );
}

export default DietDetails;