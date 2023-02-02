import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from "react";
import Cat from './data/cat';
import CatCard from './components/cat_card';
import { v4 as uuidv4 } from "uuid";
import catData from './data/cat-data';


function App(): JSX.Element {
  
	const [cats, setCats] = useState<Array<Cat>>(catData);

	// JavaScript/TypeScript code can be inserted here!
  const catCount = cats.length;
	return (
    <>
      <Navbar />
      <Header catCount={catCount}/>

      <main>
        <div className="cards__wrapper">
          <details>
            <summary>Click here to see the answer</summary>
            <pre>
              {cats.map((cat, index) => (
                <CatCard key={index} catIndex={index} name={cat.name} species={cat.species} favFoods={cat.favFoods} birthYear={cat.birthYear}/>
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
