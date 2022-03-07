import React from "react";
import { useRecoilState } from "recoil";
import { invoiceAtom } from "../src/store/atoms";

const index = () => {
  const [invoice, setInvoice] = useRecoilState(invoiceAtom);

  console.log("invoice", invoice);

  return (
    <div>
      <input
        value={invoice.description}
        onChange={(e) => {
          setInvoice({ ...invoice, description: e.target.value });
        }}
      />
    </div>
  );
};

export default index;
