import React from "react";


const cityDestiny = event => {
    alert(`Tu destino es viajar a ${event.target.value}`);
}

const Destiny = () => {
  return (
    <div>
      <select onChange={cityDestiny}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    </div>
  );
};

export default Destiny;