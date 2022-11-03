import ShoppingCart from "./ShoppingCart";
import "./styles.css";
import InitialProducts from "./Data";

export default function App() {
  return (
    <div className="App">
      <ShoppingCart InitialProducts={InitialProducts} />
    </div>
  );
}
