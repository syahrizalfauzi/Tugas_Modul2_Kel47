import React from "react";

function Button(props) {
  const { bold, italic, underline } = props;
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Jumlahnya {count} buah</p>
      <button
        onClick={() => setCount(count + 1)}
        className={`${bold ? "font-bold" : ""} ${italic ? "italic" : ""} ${
          underline ? "underline" : ""
        }`}
      >
        Tambahkan
      </button>
    </div>
  );
}

export default Button;
