import React from "react";

function Button(props) {
  const { bold, italic, underline } = props;
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState([]);
  const addData = () => {
     setData([...data, { id: count + 1, name: `Item ${count}` }]);
     setCount(count + 1);
  };
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
       <ul>
         {data.map(item => (
           <li key={item.id}>{item.name}</li>
         ))}
       </ul>
     </div>
   );
 }

export default Button;
