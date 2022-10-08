import React from "react";
import Header from "./Header";
import ModelCard from "./ModelCard";
import modelsObject from "./modelsObject";

function modelRender(model) {
  return <ModelCard name={model.name} key={model.key} />;
}

export default function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">{modelsObject.map(modelRender)}</div>
      <div className="footer-div">
        <div className="footer">
          <h3>made by Sohal Kumar Singh</h3>
        </div>
      </div>
    </>
  );
}
