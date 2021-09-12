import React from "react";

function Button(props) {
  const { benda, italic, underline } = props;
  const [count, setCount] = React.useState(0);

  return (
    <div>
      {benda.map((item) => (
        <div>
          <p>Nama : {item.name}</p>
          <p>Ukuran : {item.ukuran}</p>
          <button
            onClick={() => setCount(count + 1)}
            className={`${italic ? "italic" : ""} ${
              underline ? "underline" : ""
            }`}
          >
            <b>Tambahkan</b>
          </button>
        </div>
      ))}
      <p>Jumlah bendanya ada {count} buah</p>
    </div>
  );
}

export default Button;
