import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


// Creating a function App, always use uppercase
function App() {
  return (
    // In JSX Class Name is used instead of class
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // The below is saved, just for the reference
  // const style = { color: 'red', fontSize: '48px', textTransform: "uppercase" }
  const style = {}
  // Styling the components is so easy in JSX,for that javascript 
  // objects are to be used, which in turn are to be written as described below
  return (
    <header className="header">
      {/* className is added to render the class from CSS File */}
      <h1 style={style}>Fast Reat Pizza Co. </h1>
    </header>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* Each component can be used multiple times */}
      <Pizza
        name='Pizza Spinaci'
        ingredient='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price='10' />  {/* props were written like this */}
    </main>
  )
}

function Pizza() {
  // Passing the data from parent to child, i.e., is from Menu to Pizza
  return (
    <div>
      <img src='/pizzas/spinaci.jpg' alt="Pizza Spinaci" />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese </p>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const [openHour, closeHour] = [12, 22];
  const isOpened = hour >= openHour && hour <= closeHour ? 'open' : 'closed'
  console.log(hour);
  return (
    <footer className="footer">{new Date().toLocaleTimeString()} We're Currently {isOpened}</footer>
  );
  // return React.createElement('footer', null, "We're currently open")
}
// Creating a new component
/*
Function should start with Capital Letter
Function should always return some markup , in the form of JSX or return nothing
*/


// ReactDOM consists of create root method
// Rendering the DOM Element in v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>
);

// React before 18
// React.render(<App />,document.getElementById("root"))