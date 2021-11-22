import Tags from "./Tags";

const Categories = () => {
    return(
        <div class="col-lg-4 col-md-8 p-0">
                        <div class="sidebar-option">
                            <div class="so-categories">
                                <h5 class="title">Categories</h5>
                                <ul>
                                    <li><a href="#">Yoga <span>12</span></a></li>
                                    <li><a href="#">Runing <span>32</span></a></li>
                                    <li><a href="#">Weightloss <span>86</span></a></li>
                                    <li><a href="#">Cario <span>25</span></a></li>
                                    <li><a href="#">Body buiding <span>36</span></a></li>
                                    <li><a href="#">Nutrition <span>15</span></a></li>
                                </ul>
                            </div>

                            <Tags/>
                        </div>
                    </div>
    );
}

export default Categories;