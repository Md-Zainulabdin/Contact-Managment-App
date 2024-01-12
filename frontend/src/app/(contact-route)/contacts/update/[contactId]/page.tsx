import React from "react";

const UpdateContact = ({ params }: { params: { contactId: string } }) => {
  return <div>{params.contactId}</div>;
};

export default UpdateContact;
