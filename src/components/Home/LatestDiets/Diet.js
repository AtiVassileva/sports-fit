import { Link } from 'react-router-dom';

const Diet = ({
    id,
    name, 
    description
}) => {
    return (
        <div className="col-lg-4 col-md-8">
            <div className="ps-item pi-price">
                <h3 style={{ color: "#F36100" }}>{name}</h3>
                <p>{description.substring(0, 500)  + ' ...'}</p>
                <Link 
                    to={`/diets/details/${id}`} 
                    className="primary-btn pricing-btn">
                    See more
                </Link>
            </div>
        </div>
    );
}

export default Diet;