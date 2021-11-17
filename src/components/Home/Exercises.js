import Exercise from './Exercise';

const Exercises = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container">
              <div className="section_subtitle">welcome to sportfit</div>
              <div className="section_title">Our Courses</div>
            </div>
          </div>
        </div>
        <div className="row services_row">
          <Exercise />
          <Exercise />
          <Exercise />
          <Exercise />
          <Exercise />
          <Exercise />
        </div>
      </div>
    </div>
  );
}

export default Exercises;