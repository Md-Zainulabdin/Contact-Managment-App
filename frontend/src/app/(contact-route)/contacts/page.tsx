import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Contact } from "@/types";

const contact: Contact[] = [
  {
    id:"gdfhdfh",
    name: "Contact",
    email: "contact",
    phone: "0312848561568",
  },
];

const page = () => {
  return (
    <div>
      <div>Contact Page</div>
      <div>
        <DataTable columns={columns} data={contact} />
      </div>
    </div>
  );
};

export default page;
