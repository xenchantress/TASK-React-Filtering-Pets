import React, { useState } from 'react';


function PetItem({ pet }) {
  const [currentImage, setCurrentImage] = useState(pet.image);
  const handleButtonClick = () => {
    setCurrentImage(pet.image2);
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">

        <img className="image" alt={pet.name} src={currentImage} />

        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={handleButtonClick}>
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
