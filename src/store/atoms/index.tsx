import { atom } from "recoil";

const invoiceAtom = atom({
  key: "invoice",
  default: {
    days: 0,
    valuePerDay: 174.0,
    description: "",
  },
});

export { invoiceAtom };
