import { Link } from 'react-router-dom';

const Exercise = ({
    exercise
}) => {
    return (
        <div>
            <div className="blog-item">
                <div className="bi-pic">
                    <img src={exercise.imageUrl} alt="" />
                </div>
                <div className="bi-text">
                    <h5>
                        <Link to={`/exercises/details/${exercise.id}`}>{exercise.name}</Link>
                    </h5>
                    <ul>
                        <li>{exercise.author}</li>
                        <li>{exercise.date}</li>
                    </ul>
                    <p>{exercise.description.substring(0, 500) + '... '}
                        <Link to={`/exercises/details/${exercise.id}`}>
                            Read more...
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Exercise;