import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {
  tunaSandwich,
  catfish,
  salmonSteak,
  trout,
  walleyeSticks,
  perch,
  sturgeon,
} from "./features/MENU.js";
import { shrimp, cod, tuna, salmonSplash } from "./features/DRINKS.js";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <p>
            by Doug Altermatt |
            <a href="https://www.linkedin.com/in/d-altermatt-motivated-user/">
              LinkedIn
            </a>{" "}
            |<a href="https://github.com/MotivatedUser">GitHub</a> |
            <a href="tel:+15094815800">(509)481-5800</a>
          </p>
          <h1>Something Fishy Responsive Menu App</h1>
        </div>
      </header>

      <body className="App-body">
        <Container>
          <h2 className="menuTitle">Main Dishes</h2>
          <Row>
            <Col col-3 col-xs-12 col-s-6 col-lg-4 col-xl-3>
              <div className="allMenu">
                <h1 className="menuName">{tunaSandwich.name}</h1>
                <img
                  className="menuImage"
                  src={tunaSandwich.image}
                  alt="Tuna Sandwich on white plate."
                />
                <p className="menuCalories">
                  Calories : {tunaSandwich.calories}
                </p>
                <h3 className="menuPrice">${tunaSandwich.price}</h3>
                <p className="menuDisclaimer">
                  Disclaimer : {tunaSandwich.disclaimer}
                </p>
                <button className="menuButtons">Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{salmonSteak.name}</h1>
                <img
                  className="menuImage"
                  src={salmonSteak.image}
                  alt="Salmon Steak"
                />
                <p className="menuCalories">
                  Calories : {salmonSteak.calories}
                </p>
                <h3 className="menuPrice">${salmonSteak.price}</h3>
                <p className="menuDisclaimer">
                  Disclaimer : {salmonSteak.disclaimer}
                </p>
                <button className="menuButtons">Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{catfish.name}</h1>
                <img
                  className="menuImage"
                  src={catfish.image}
                  alt="Fried Catfish"
                />
                <p className="menuCalories">Calories : {catfish.calories}</p>
                <h3 className="menuPrice">${catfish.price}</h3>
                <p className="menuDisclaimer">
                  Disclaimer : {catfish.disclaimer}
                </p>
                <button className="menuButtons">Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{trout.name}</h1>
                <img
                  className="menuImage"
                  src={trout.image}
                  alt="Baked Trout"
                />
                <p className="menuCalories">Calories : {trout.calories}</p>
                <h3 className="menuPrice">${trout.price}</h3>
                <p className="menuDisclaimer">
                  Disclaimer : {trout.disclaimer}
                </p>
                <button className="menuButtons">Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{walleyeSticks.name}</h1>
                <img
                  className="menuImage"
                  src={walleyeSticks.image}
                  alt="Raw fish with heads removed as a joke"
                />
                <p className="menuCalories">
                  Calories : {walleyeSticks.calories}
                </p>
                <h3 className="menuPrice">${walleyeSticks.price}</h3>
                <p className="menuDisclaimer">
                  Disclaimer : {walleyeSticks.disclaimer}
                </p>
                <button className="menuButtons">Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{perch.name}</h1>
                <img
                  className="menuImage"
                  src={perch.image}
                  alt="Tuna Sandwich on white plate."
                />
                <p className="menuCalories">Calories : {perch.calories}</p>
                <h3 className="menuPrice">${perch.price}</h3>
                <p className="menuDisclaimer">
                  Disclaimer : {perch.disclaimer}
                </p>
                <button className="menuButtons">Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{sturgeon.name}</h1>
                <img
                  className="menuImage"
                  src={sturgeon.image}
                  alt="Tuna Sandwich on white plate."
                />
                <p className="menuCalories">Calories : {sturgeon.calories}</p>
                <h3 className="menuPrice">${sturgeon.price}</h3>
                <p className="menuDisclaimer">
                  Disclaimer : {sturgeon.disclaimer}
                </p>
                <button className="menuButtons">Add</button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <h2 className="menuTitle">Drink Menu</h2>
          <Row>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{shrimp.name}</h1>
                <img
                  className="drinkImage"
                  src={shrimp.image}
                  alt="A Shrimp drink."
                />
                <p className="menuCalories">Calories : {shrimp.calories}</p>
                <h3 className="menuPrice">${shrimp.price}</h3>
                <br />
                <button className="menuButtons">Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{cod.name}</h1>
                <img
                  className="drinkImage"
                  src={cod.image}
                  alt="Cocktail made with Cod"
                />
                <p className="menuCalories">Calories : {cod.calories}</p>
                <h3 className="menuPrice">${cod.price}</h3>
                <br />
                <button className="menuButtons">Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{tuna.name}</h1>
                <img
                  className="drinkImage"
                  src={tuna.image}
                  alt="Tuna Cocktail"
                />
                <p className="menuCalories">Calories : {tuna.calories}</p>
                <h3 className="menuPrice">${tuna.price}</h3>
                <br />
                <button className="menuButtons">Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{salmonSplash.name}</h1>
                <img
                  className="drinkImage"
                  src={salmonSplash.image}
                  alt="Salmon Cocktail"
                />
                <p className="menuCalories">
                  Calories : {salmonSplash.calories}
                </p>
                <h3 className="menuPrice">${salmonSplash.price}</h3>
                <br />
                <button className="menuButtons">Add</button>
              </div>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
