import Tags from "./Tags";
import { Link } from 'react-router-dom';

const Categories = () => {
    return(
        <div class="col-lg-4 col-md-8 p-0">
                        <div class="sidebar-option">
                            <div class="so-categories">
                                <h5 class="title">Categories</h5>
                                <ul>
                                    <li><Link to="#">Yoga <span>12</span></Link></li>
                                    <li><Link to="#">Runing <span>32</span></Link></li>
                                    <li><Link to="#">Weightloss <span>86</span></Link></li>
                                    <li><Link to="#">Cario <span>25</span></Link></li>
                                    <li><Link to="#">Body buiding <span>36</span></Link></li>
                                    <li><Link to="#">Nutrition <span>15</span></Link></li>
                                </ul>
                            </div>

                            <Tags/>
                        </div>
                    </div>
    );
}

export default Categories;