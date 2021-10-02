import "./App.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Strip from "./Components/Strip";

function App() {
  return (
    <div className="App">
      <Header />
      <Strip />
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Card
              title="Fancy Product"
              rating="0"
              price="$40-$80"
              option="Add to Cart"
              sale="0"
            />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Card
              title="Fancy Product"
              rating="0"
              price="$40-$80"
              option="Add to Cart"
              sale="1"
            />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Card
              title="Fancy Product"
              rating="0"
              price="$40-$80"
              option="Add to Cart"
              sale="0"
            />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Card
              title="Fancy Product"
              rating="0"
              price="$40-$80"
              option="Add to Cart"
              sale="1"
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Card
              title="Fancy Product"
              rating="0"
              price="$40-$80"
              option="Add to Cart"
              sale="1"
            />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Card
              title="Fancy Product"
              rating="0"
              price="$40-$80"
              option="Add to Cart"
              sale="1"
            />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Card
              title="Fancy Product"
              rating="0"
              price="$40-$80"
              option="Add to Cart"
              sale="0"
            />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Card
              title="Fancy Product"
              rating="0"
              price="$40-$80"
              option="Add to Cart"
              sale="0"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
