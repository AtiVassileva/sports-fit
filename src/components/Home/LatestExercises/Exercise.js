import { Link } from 'react-router-dom';

const Exercise = ({
  id,
  name,
  imageUrl
}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="class-item">
        <div className="ci-pic">
          <img src={imageUrl} alt="" />
        </div>
        <div className="ci-text">
          <h5>{name}</h5>
          <Link to={`/exercises/details/${id}`}>
            <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Exercise;