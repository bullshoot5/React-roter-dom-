import React from "react";

const BookInfo = ({ label, value }) => {
  console.log(label, value);
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{label}</span>
      <span>{value}</span>
    </p>
  );
};

export default BookInfo;
