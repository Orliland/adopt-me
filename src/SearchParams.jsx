import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Los Angeles, CA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            type="text"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((element, key) => (
              <option key={key}>{element}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={breed}
            disabled={breeds.length === 0}
            onChange={(e) => setBreed(e.target.value)}
          >
            {breeds.map((element, key) => (
              <option key={key}>{element}</option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
