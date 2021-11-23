import { Link } from 'react-router-dom';

const Exercise = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="class-item">
        <div className="ci-pic">
          <img src="img/classes/class-2.jpg" alt="" />
        </div>
        <div className="ci-text">
          <span>Cardio</span>
          <h5>Indoor cycling</h5>
          <Link to="#"><i className="fa fa-angle-right"></i></Link>
        </div>
      </div>
    </div>
  );
}

export default Exercise;