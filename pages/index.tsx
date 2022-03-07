import React from "react";
import { useRecoilState } from "recoil";
import { invoiceAtom, invoicesAtom } from "../src/store/atoms";

const index = () => {
  const [invoice, setInvoice] = useRecoilState(invoiceAtom);
  const [invoices, setInvoices] = useRecoilState(invoicesAtom);

  console.log("invoices", invoices);

  const handleAddInvoice = (e: any) => {
    e.preventDefault();
    setInvoices([...invoices, invoice]);
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
        }}
        onSubmit={handleAddInvoice}
      >
        <input
          value={invoice.description}
          onChange={(e) => {
            setInvoice({ ...invoice, description: e.target.value });
          }}
        />
        <input
          value={invoice.days}
          onChange={(e) => {
            setInvoice({ ...invoice, days: +e.target.value });
          }}
          type="number"
        />
        <input
          value={invoice.valuePerDay}
          onChange={(e) => {
            setInvoice({ ...invoice, valuePerDay: +e.target.value });
          }}
        />

        <button type="submit">Add Invoice</button>
      </form>

      <div style={{ width: "500px", display: "flex", background: "lightGray" }}>
        {invoices.map((invoice, index) => {
          return (
            <div
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
    </div>
  );
};

export default index;
