import React from "react";

function Checklists(props) {
  const { items, strikethrough, isBordered } = props;

  return (
    <table className="table-auto">
      {items.map((item) => (
        <tr
          className={`${isBordered ? "border-2" : ""} ${
            strikethrough && item.isChecked ? "line-through" : ""
          }`}
        >
          <td className="p-2">
            <input type="checkbox" checked={item.isChecked}></input>
          </td>
          <td className="p-2">{item.title}</td>
        </tr>
      ))}
    </table>
  );
}

export default Checklists;
