import { atom, RecoilState } from "recoil";

interface IInvoice {
  days: number;
  valuePerDay: number;
  description: string;
}

const invoiceAtom = atom({
  key: "invoice",
  default: {
    days: 0,
    valuePerDay: 174.0,
    description: "",
  },
});

const invoicesAtom = atom({
  key: "invoices",
  default: [] as IInvoice[],
});

export { invoiceAtom, invoicesAtom };
