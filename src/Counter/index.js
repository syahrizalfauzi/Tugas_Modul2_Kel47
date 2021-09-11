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
            isClicked ? "red" : ""
          }`}
        >
          Tambahkan
          <input type="submit" clicked={isClicked}></input>
        </b>
      </button>
    </div>
  );
}

export default Button;
