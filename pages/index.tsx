import React from "react";
import { useRecoilState } from "recoil";
import { invoiceAtom } from "../src/store/atoms";

const index = () => {
  const [invoice, setInvoice] = useRecoilState(invoiceAtom);

  console.log("invoice", invoice);

  return (
    <div>
      <input />
    </div>
  );
};

export default index;
