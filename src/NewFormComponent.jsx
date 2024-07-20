import "@google/model-viewer";
import { Fragment } from "react";
const NewFormComponent = () => {
  return (
    <Fragment>
      <div className="model-laptop-container">
        <model-viewer
          style={{ width: "400px", height: "400px" }}
          className="model-laptop"
          alt="laptop"
          src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/laptop.glb"
          shadow-intensity="10"
          camera-controls
          touch-action="pan-y"
          environment-image="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/dancing_hall_2k.hdr"
          exposure="1.5"
          disable-zoom
          disable-tap
          camera-orbit="-45deg 60deg 9m"
          autoplay
        ></model-viewer>
      </div>
    </Fragment>
  );
};

export default NewFormComponent;
