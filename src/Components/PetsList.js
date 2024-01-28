import pets from "../petsData";
import PetItem from "./PetItem";
import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import PetSelector from "./PetSelector";


function PetsList() {

  const [query, setQuery] = useState('');
  const [type, setType] = useState('');


  const filteredPets = pets.filter(
  (pet) =>
   pet.name.toLowerCase().includes(query.toLowerCase()) && 
   (type === '' || pet.type.toLowerCase() === type.toLocaleLowerCase())
   );

  const petList = filteredPets.map((pet) => <PetItem pet={pet} key={pet.id} />);


  
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar query ={query} setQuery={setQuery}/>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={query}
                  onChange={handleSearchChange}
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange={handleTypeChange} value={type}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
              <PetSelector type={type} setType={setType} />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
