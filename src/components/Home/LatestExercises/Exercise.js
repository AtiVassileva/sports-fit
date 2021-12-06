import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as categoryService from '../../../services/categoryService';

const Exercise = ({
  id,
  name,
  imageUrl,
  categoryId
}) => {
  const [category, setCategory] = useState({});

  useEffect(() => {
    categoryService.findCategory(categoryId)
      .then(category => setCategory(category));
  })

  return (
    <div className="col-lg-4 col-md-6">
      <div className="class-item">
        <div className="ci-pic">
          <img src={imageUrl} alt="" />
        </div>
        <div className="ci-text">
          <span>{category.name}</span>
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