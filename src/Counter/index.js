import React from "react";

function Button(props) {
  const { blue, italic, isClicked } = props;
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Jumlahnya {count} buah</p>
      <button onClick={() => setCount(count + 1)}>
        <b
          className={`${blue ? "blue" : ""} ${italic ? "italic" : ""} ${
            isClicked ? "underline" : ""}`} 
        >
          Tambahkan
          <input type="button" clicked={isClicked}></input>
        </b>
      </button>
    </div>
  );
}

export default Button;
