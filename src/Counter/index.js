import React from "react";

function Button() {
  const [count, setCount] = React.useState(0);
  const { blue, italic, isClicked } = props;
  return (
    <div>
      <p>Jumlahnya {count} buah</p>
      <button onClick={() => setCount(count + 1)}>
        Tambahkan
        <input type="submit" clicked={isClicked}></input>
        {count.useState((isClicked) => (
          <b
            className={`${blue ? "blue" : ""} ${italic ? "italic" : ""} ${
              isClicked ? "red" : ""
            }`}
          ></b>
        ))}
      </button>
    </div>
  );
}

export default Button;
