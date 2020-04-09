import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

export const DeleteButton = ({ onDelete, entityName }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <button
        className="btn btn-danger btn-icon btn-sm"
        title="Delete"
        onClick={e => {
          //console.log(e);
          e.stopPropagation();
          setShowConfirm(true);
        }}
      >
        Delete
      </button>
      {showConfirm && (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Yes, delete it!"
          confirmBtnBsStyle="danger"
          title={`Do you confirm the deletion${
            entityName ? " of the " + entityName : ""
          }?`}
          onConfirm={() => {
            onDelete();
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
          focusCancelBtn
          closeOnClickOutside={false}
        >
          This action cannot be undone.
        </SweetAlert>
      )}
    </>
  );
};
