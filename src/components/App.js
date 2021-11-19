import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function updateFilter(newFilter){
    setFilters({type: `${newFilter}`})
  }

  function grabPets(){
    let queryParameter = ""
    if(filters.type === "cat"){
      queryParameter = "?type=cat"
    } else if(filters.type === "dog"){
      queryParameter = "?type=dog"
    } else if(filters.type === "micropig"){
      queryParameter = "?type=micropig"
    }

    fetch(`http://localhost:3001/pets/${queryParameter}`)
      .then(resp => resp.json())
      .then(data => setPets(data))
  }

  function updatePet(id){
    const updatedPetsAry = pets.map(pet => {
      if(pet.id === id){
        return {...pet, isAdopted:true}
      } else{
        return pet
      }
    })

    setPets(updatedPetsAry)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={updateFilter} onFindPetsClick={grabPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={updatePet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
