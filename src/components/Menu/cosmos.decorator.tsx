import React from "react";

const Decorator: React.FC = ({ children }) => (
  <div style={{ margin: `50px 150px` }}>
    {children}
    <div>Background div 1</div>
    <div>Background div 2</div>
    <div>Background div 3</div>
    <div>Background div 4</div>
    <div>Background div 5</div>
    <div>Background div 6</div>
    <div>Background div 7</div>
    <div>Background div 8</div>
    <div>Background div 9</div>
  </div>
);

export default Decorator;
