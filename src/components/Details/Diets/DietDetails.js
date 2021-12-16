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

        let diet = dietService.findDiet(id);
        setDiet(diet);
        // dietService.findDiet(id)
        //     .then(diet => {
        //         setDiet(diet);
        //     });

        setDiet({});
    }, [match.params.id]);

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