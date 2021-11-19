import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petsElements = pets.map(pet => <Pet key={pet.id} onAdoptPet = {onAdoptPet} pet={pet}/>)

  return <div className="ui cards">{petsElements}</div>;
}

export default PetBrowser;
