import React from "react";
import { useRecoilState } from "recoil";
import { invoicesAtom } from "../../store/atoms";

export const DisplayInvoices = () => {
  const [invoices, setInvoices] = useRecoilState(invoicesAtom);

  const handleRemoveInvoice = (e: any, invoiceIndex: number) => {
    e.preventDefault();
    const filteredInvoices = invoices.filter(
      (invoice, index) => index !== invoiceIndex
    );
    setInvoices(filteredInvoices);
  };

  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        background: "lightGray",
      }}
    >
      {invoices.map((invoice, index) => {
        return (
          <div
            onClick={(e) => handleRemoveInvoice(e, index)}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              padding: "16px",
              alignItems: "center",
            }}
            key={index}
          >
            <h1>{invoice.description}</h1>
            <p>{invoice.days}</p>
            <p>{invoice.valuePerDay}</p>
          </div>
        );
      })}
    </div>
  );
};
