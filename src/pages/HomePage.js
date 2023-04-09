import FishJokes from "../app/components/FishJokes";
import ImageSlider from "../app/components/ImageSlider";
import { Col, Row, Container } from "reactstrap";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12" md="6" >
            <ImageSlider />
          </Col>
          <Col sm="12" md="6">
            <FishJokes />
          </Col>
        </Row>
        <hr />
        <Row>
          <div>
            <h1 className="header-subtitle">Fish so fresh, you'll think we have a bathtub in the kitchen... oh wait, we do!</h1>
            <p>
              Welcome to our fish restaurant, where we offer the freshest fish
              in town...or at least the ones we catch in our bathtub! Just
              kidding, we only serve the best quality fish that money can
              buy...but we do have a bathtub in the back if you need to rinse
              off after diving into our delicious fish dishes. Our fish are so
              good, you might just end up floundering for words after taking a
              bite. But don't worry, we won't judge you for your fish-induced
              speechlessness. So, whether you're a seasoned fish lover or just
              starting to dip your toes into the world of seafood, come on in
              and let us school you on how to have a fintastic time!
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
