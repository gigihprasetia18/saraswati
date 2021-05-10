import "./App.css";
import Navbar from "./navbar";
import Content from "./content";
import Card from "./card";
import Payment from "./cardpayment";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Card />
      <Payment />
    </div>
  );
}

export default App;
