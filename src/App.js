import { Container } from "react-bootstrap";
import NavBar from "./componant/navBar";
import Header from "./componant/Header";
import Catogory from "./componant/catogory";
import Cards from "./componant/Cards";
import { items } from "./data";
import { useState } from "react";
function App() {
  const [meals, setMeals] = useState(items);

  const uniqueCategories = ['All',...new Set(meals.map((item) => item.catogory))];

  const filterByCatogory = (cat) => {
    if (cat === "All") {
      setMeals(items);
    } else {
      setMeals(meals.filter((item) => item.catogory === cat));
    }
  };
  const filterBySearch = (word) => {
    if (word !=="") {
      setMeals(meals.filter((item) => item.title === word));
    }
  };
  return (
    <div className="App">
      <NavBar filterBySearch={filterBySearch}/>
      <Container>
        <Header />
        <Catogory uniqueCategories={uniqueCategories}filterByCatogory={filterByCatogory} />
        <Cards meals={meals} />
      </Container>
    </div>
  );
}

export default App;
