import { useState } from "react";

export default function ShoppingCart(props) {
  const [counts, setCount] = useState(props.InitialProducts);

  function increement(e) {
    setCount([...counts], ++counts[e.target.name].count);
  }
  function decreement(e) {
    if (counts[e.target.name].count > 0)
      setCount([...counts], --counts[e.target.name].count);
  }
  return (
    <div>
      Shopping cart
      <br />
      {counts.map((c) => {
        return (
          <div key={c.id}>
            {c.name}({c.count})
            <button name={c.id} onClick={(e) => increement(e)}>
              +
            </button>
            <button name={c.id} onClick={(e) => decreement(e)}>
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
