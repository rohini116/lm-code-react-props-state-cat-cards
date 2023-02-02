import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from "react";
import Cat from './data/cat';
import Dog from './data/dog';
import DogCard from './components/dog_card';
import CatCard from './components/cat_card';
import { v4 as uuidv4 } from "uuid";
import catData from './data/cat-data';
import dogData from './data/dog-data';


function App(): JSX.Element {
  
	const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDog] = useState<Array<Dog>>(dogData);
	// JavaScript/TypeScript code can be inserted here!
  const catCount = cats.length;
  const dogCount = dogs.length;
	return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          <details>
            <summary>Click here to see the answer</summary>
            <pre>
              <h3 className="header__title">Cats:</h3>
              {cats.map((cat, index) => (
                <CatCard
                  key={index}
                  catIndex={index}
                  name={cat.name}
                  species={cat.species}
                  favFoods={cat.favFoods}
                  birthYear={cat.birthYear}
                />
              ))}
              {cats.map((cat, index) => (
                <CatCard
                  key={index}
                  catIndex={index}
                  name={cat.name}
                  species={cat.species}
                  favFoods={cat.favFoods}
                  birthYear={cat.birthYear}
                />
              ))}
              <h3 className="header__title">Dogs:</h3>
              {dogs.map((dog, index) => (
                <DogCard
                  key={index}
                  name={dog.name}
                  species={dog.species}
                  favFoods={dog.favFoods}
                  birthYear={dog.birthYear}
                />
              ))}
            </pre>
          </details>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
