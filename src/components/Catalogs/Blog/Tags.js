import { Link } from 'react-router-dom';

const Tags = () => {
    return (
        <div className="so-tags">
            <h5 className="title">Popular tags</h5>
            <Link to="#">Gyming</Link>
            <Link to="#">Body buidling</Link>
            <Link to="#">Yoga</Link>
            <Link to="#">Weightloss</Link>
            <Link to="#">Proffeponal</Link>
            <Link to="#">Streching</Link>
            <Link to="#">Cardio</Link>
            <Link to="#">Karate</Link>
        </div>
    );
}

export default Tags;