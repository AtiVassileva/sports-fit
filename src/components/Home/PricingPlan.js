import { Link } from 'react-router-dom';

const PricingPlan = () => {
    return (
        <div className="col-lg-4 col-md-8">
            <div className="ps-item">
                <h3>6 Month unlimited</h3>
                <div className="pi-price">
                    <h2>$ 59.0</h2>
                    <span>SINGLE Class</span>
                </div>
                <ul>
                    <li>Free riding</li>
                    <li>Unlimited equipments</li>
                    <li>Personal trainer</li>
                    <li>Weight losing Classes</li>
                    <li>Month to mouth</li>
                    <li>No time restriction</li>
                </ul>
                <Link to="#" className="primary-btn pricing-btn">Enroll now</Link>
                <Link to="#" className="thumb-icon"><i className="fa fa-picture-o"></i></Link>
            </div>
        </div>
    );
}

export default PricingPlan;