import { Link } from 'react-router-dom';

const Diet = ({
    diet
}) => {
    return (
        <div>
            <div className="blog-item">
                <div className="bi-pic">
                    <img src={diet.imageUrl} alt="" />
                </div>
                <div className="bi-text">
                    <h5>
                        <Link to={`/diets/details/${diet.id}`}>{diet.name}</Link>
                    </h5>
                    <ul>
                    <li>{diet.author}</li>
                    <li>{diet.date}</li>
                </ul>
                    <p>{diet.description.substring(0, 500) + '... '}
                    <Link to={`/diets/details/${diet.id}`}>Read more...
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Diet;