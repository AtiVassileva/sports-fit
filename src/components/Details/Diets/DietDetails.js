import { useState, useEffect } from 'react';
import * as dietService from '../../../services/dietService';
import Content from "../Content";
import Title from "../Title";

const DietDetails = ({
    match
}) => {

    const [diet, setDiet] = useState({});

    useEffect(() => {
        let id = match.params.id;

        dietService.findDiet(id)
        .then(diet => {
            setDiet(diet);
        });
    }, [match.params.id]);

    return (
        <div>
            <Title imageUrl={diet.imageUrl}
                title={diet.name}
            />
            <Content content={diet.description}
            path="/diets"
            id={match.params.id}
            />
        </div>
    );
}

export default DietDetails;