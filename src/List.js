import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import { DeleteButton } from "./DeleteButton";
import { listItems } from "./listItems";

export default function List(props) {
  const [list, setList] = useState(listItems);

  // useEffect(() => {
  //   fetch("list.json")
  //     .then(res => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then(out => {
  //       console.log("Checkout this JSON! ", out);
  //       setList(out);
  //     });
  // }, []);

  const onRowClick = item => e => {
    e.stopPropagation();
    alert(JSON.stringify(item));
  };

  const handleDelete = itemId => () => {
    setList(x => x.filter(y => y.id !== itemId));
  };

  // Render /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <h2>List</h2>

      <table className="table table-sm table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Sender User Id</th>
            <th>Recipient User Id</th>
            <th>Category</th>
            <th>Send Time</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr className="tr-link" onClick={onRowClick(item)} key={index}>
              <td>{item.id}</td>
              <td>{item.senderId}</td>
              <td>{item.recipientId}</td>
              <td>{item.category}</td>
              <td>{item.sendTime}</td>
              <td className="text-right">
                <DeleteButton
                  onDelete={handleDelete(item.id)}
                  entityName="Item"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
