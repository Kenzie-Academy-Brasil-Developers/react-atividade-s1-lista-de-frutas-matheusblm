import "./App.css";
import { useState } from "react";
function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  const totalPrice = () => {
    return fruits.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.price;
    }, 0);
  };
  console.log(totalPrice);
  const handleClick = () => {
    setFruits(fruits.filter((a) => a.color === "red"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Preco Total = {totalPrice()}</h3>
        <h3>Lista de Frutas</h3>
        <ul>
          {fruits.map((frut, index) => (
            <li key={index}>{frut.name}</li>
          ))}
        </ul>
        <button onClick={handleClick}>Filtrar Frutas Vermelhas</button>
      </header>
    </div>
  );
}

export default App;
