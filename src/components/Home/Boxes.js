import Box from './Box';

const Boxes = () => {
  return (
    <div className="boxes">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
              <Box />
              <Box />
              <Box />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;