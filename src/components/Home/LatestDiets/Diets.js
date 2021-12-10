import Diet from "./Diet";
import { useState, useEffect} from 'react';
import * as dietService from '../../../services/dietService';

const Diets = () => {

    const [latestDiets, setLatestDiets] = useState([]);

    useEffect(() => {
        dietService.getLatestDiets()
            .then(diets => setLatestDiets(diets));
    }, []);

    return (
        <section className="pricing-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Diets</span>
                            <h2>Check them out</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                {latestDiets
                        .map(x =>
                            <Diet
                                key={x.id}
                                id={x.id}
                                name={x.name}
                                description={x.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Diets;