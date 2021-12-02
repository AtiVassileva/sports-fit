import { Link } from 'react-router-dom';
import * as categoryService from '../../../services/categoryService';
import { useState, useEffect } from "react";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let categories = categoryService.getAllCategories();
        setTimeout(() => {
            setCategories(categories);
        }, 500);
    }, []);


    return (
        <div className="col-lg-4 col-md-8 p-0">
            <div className="sidebar-option">
                <div className="so-categories">
                    <h5 className="title">Categories</h5>
                    <ul>
                        {categories.map(x =>
                            <li key={x.id}>
                                <Link to="#">{x.name} </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Categories;