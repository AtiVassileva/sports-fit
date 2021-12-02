import Pagination from "../Pagination";
import Diet from "./Diet";
import { useState, useEffect } from "react";
import * as dietService from "../../../services/dietService";

const Main = () => {

    const [diets, setDiets] = useState([]);

    useEffect(() => {
        let diets = dietService.getAllDiets();

        setTimeout(() => {
            setDiets(diets);
        }, 500);

        console.log(diets);
    }, []);

    return (
        <section className="services-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Feeling fluffy and want to lose weight?</span>
                            <h2>CHECK OUT OUR DIETS AND BOOST YOUR CONFIDENCE</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {diets.map(x =>
                        <Diet
                            key={x.id}
                            diet={x}
                        />
                    )}
                </div>
                <Pagination appSection="diets" />
            </div>
        </section>
    );
}

export default Main;