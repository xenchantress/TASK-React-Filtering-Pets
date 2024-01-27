import React from 'react';

function PetSelector({ type, setType }) {
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      Type:
      <select className="form-select" onChange={handleTypeChange} value={type}>
        <option value="" selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </>
  );
}

export default PetSelector;
