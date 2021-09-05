import React, { useMemo } from "react";

function Checklists(props) {
  const { items, strikethrough, isBordered } = props;
  const currentItems = useMemo(() => items, [items]);

  return (
    <table className="table-auto">
      {currentItems.map((item) => (
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
