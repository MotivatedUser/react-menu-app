import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import {
  tunaSandwich, catfish, salmonSteak, trout, walleyeSticks, perch, sturgeon,
  squid, twizzler } from "../features/MENU.js";
import { barbie, surprise, cheese, platter, crappie, salmonella } from "../features/APPETIZERS";
import { shrimp, cod, tuna, salmonSplash, tonic, ale } from "../features/DRINKS.js";
import Cart from "../app/components/Cart";
import { CartContext } from "../app/components/CartContent";

const MenuPage = () => {
    const [cartItems, setCartItems] = useContext(CartContext);
  
    const addItemToCart = (item) => {
      setCartItems([...cartItems, item]);
      
    };
  
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
    <>
    <div>
        <h5 className="links-container">
            <a href="#starter" className="links">Starter Menu</a> | 
            <a href="#mainCourse" className="links">Main Dishes</a> | 
            <a href="#drinks" className="links">Drink Menu</a>
        </h5>
      <Container className="App-body" >
          <h2 className="menuTitle" id="starter">Starter Menu</h2>
          <Row>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{barbie.name}</h1>
                <img
                  className="drinkImage"
                  src={barbie.image}
                  alt="A Shrimp drink."
                />
                <p className="menuCalories">Calories : {barbie.calories}</p>
                <h3 className="menuPrice">${barbie.price}</h3>
                <p className="menuDisclaimer" >Disclaimer : {barbie.disclaimer}</p>
                <button className="menuButtons" onClick={() => addItemToCart(barbie)} >Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{surprise.name}</h1>
                <img
                  className="drinkImage"
                  src={surprise.image}
                  alt="Cocktail made with Cod"
                />
                <p className="menuCalories">Calories : {surprise.calories}</p>
                <h3 className="menuPrice">${surprise.price}</h3>
                <br />
                <button className="menuButtons" onClick={() => addItemToCart(surprise)}>Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{cheese.name}</h1>
                <img
                  className="drinkImage"
                  src={cheese.image}
                  alt="Tuna Cocktail"
                />
                <p className="menuCalories">Calories : {cheese.calories}</p>
                <h3 className="menuPrice">${cheese.price}</h3>
                <br />
                <button className="menuButtons" onClick={() => addItemToCart(cheese)}>Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{platter.name}</h1>
                <img
                  className="drinkImage"
                  src={platter.image}
                  alt="Salmon Cocktail"
                />
                <p className="menuCalories">
                  Calories : {platter.calories}
                </p>
                <h3 className="menuPrice">${platter.price}</h3>
                <br />
                <button className="menuButtons" onClick={() => addItemToCart(platter)}>Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{crappie.name}</h1>
                <img
                  className="drinkImage"
                  src={crappie.image}
                  alt="Hamburger"
                />
                <p className="menuCalories">
                  Calories : {crappie.calories}
                </p>
                <h3 className="menuPrice">${crappie.price}</h3>
                <br />
                <button className="menuButtons" onClick={() => addItemToCart(crappie)}>Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{salmonella.name}</h1>
                <img
                  className="drinkImage"
                  src={salmonella.image}
                  alt="Hamburger"
                />
                <p className="menuCalories">
                  Calories : {salmonella.calories}
                </p>
                <h3 className="menuPrice">${salmonella.price}</h3>
                <br />
                <button className="menuButtons" onClick={() => addItemToCart(salmonella)}>Add</button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <h2 className="menuTitle" id="mainCourse" >Main Dishes</h2>
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
                <button className="menuButtons" onClick={() => addItemToCart(tunaSandwich)}>Add</button>
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
                <button className="menuButtons" onClick={() => addItemToCart(salmonSteak)}>Add</button>
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
                <button className="menuButtons" onClick={() => addItemToCart(catfish)}>Add</button>
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
                <button className="menuButtons"  onClick={() => addItemToCart(trout)}>Add</button>
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
                <button className="menuButtons"  onClick={() => addItemToCart(walleyeSticks)}>Add</button>
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
                <button className="menuButtons" onClick={() => addItemToCart(perch)}>Add</button>
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
                <button className="menuButtons" onClick={() => addItemToCart(sturgeon)}>Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{twizzler.name}</h1>
                <img
                  className="menuImage"
                  src={twizzler.image}
                  alt="Tuna Sandwich on white plate."
                />
                <p className="menuCalories">Calories : {twizzler.calories}</p>
                <h3 className="menuPrice">${twizzler.price}</h3>
                <p className="menuDisclaimer">
                  Disclaimer : {twizzler.disclaimer}
                </p>
                <button className="menuButtons" onClick={() => addItemToCart(twizzler)}>Add</button>
              </div>
            </Col>
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{squid.name}</h1>
                <img
                  className="menuImage"
                  src={squid.image}
                  alt="Tuna Sandwich on white plate."
                />
                <p className="menuCalories">Calories : {squid.calories}</p>
                <h3 className="menuPrice">${squid.price}</h3>
                <p className="menuDisclaimer">
                  Disclaimer : {squid.disclaimer}
                </p>
                <button className="menuButtons" onClick={() => addItemToCart(squid)}>Add</button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <h2 className="menuTitle" id="drinks" >Drink Menu</h2>
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
                <button className="menuButtons" onClick={() => addItemToCart(shrimp)}>Add</button>
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
                <button className="menuButtons" onClick={() => addItemToCart(cod)}>Add</button>
              </div>
            </Col>
            
            <Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{tonic.name}</h1>
                <img
                  className="drinkImage"
                  src={tonic.image}
                  alt="Tuna Cocktail"
                />
                <p className="menuCalories">Calories : {tonic.calories}</p>
                <h3 className="menuPrice">${tonic.price}</h3>
                <br />
                <button className="menuButtons" onClick={() => addItemToCart(tonic)}>Add</button>
              </div>
            </Col><Col col-3 col-xs-12 col-s-6 col-lg-4>
              <div className="allMenu">
                <h1 className="menuName">{ale.name}</h1>
                <img
                  className="drinkImage"
                  src={ale.image}
                  alt="Tuna Cocktail"
                />
                <p className="menuCalories">Calories : {ale.calories}</p>
                <h3 className="menuPrice">${ale.price}</h3>
                <br />
                <button className="menuButtons" onClick={() => addItemToCart(ale)}>Add</button>
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
                <button className="menuButtons" onClick={() => addItemToCart(tuna)}>Add</button>
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
                <button className="menuButtons" onClick={() => addItemToCart(salmonSplash)}>Add</button>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
        
    </>
    )
};

export default MenuPage;
