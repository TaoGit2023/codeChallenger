import { useState } from "react";
import CalculateTax from "./components/CalculateTax/CalculateTax";
import Header from "./components/Header/Header";
import IncomeInput from "./components/IncomeInput/IncomeInput";
import TaxResult from "./components/TaxResult/TaxResult";

const TaxCalculator = () => {
  const [tax, setTax] = useState(0);
  const [income, setIncome] = useState(0);
  const handleIncomeChange = (event) => {
    if (event.target.value < 0) {
      setIncome(0);
    } else {
      setIncome(event.target.value);
    }
  };
  const calTax = (TaxableIncome) => {
    if (TaxableIncome == 0 || TaxableIncome == null) {
      setTax(0);
      return;
    }
    const TaxTable = [
      { MIN: 0, MAX: 18200, BASE: 0, RATE: 0 },
      { MIN: 18200, MAX: 45000, BASE: 0, RATE: 0.19 },
      { MIN: 45000, MAX: 120000, BASE: 5092, RATE: 0.325 },
      { MIN: 120000, MAX: 180000, BASE: 29467, RATE: 0.37 },
      { MIN: 180000, MAX: Number.POSITIVE_INFINITY, BASE: 51667, RATE: 0.45 },
    ];
    for (let i = 0; i < TaxTable.length; i++) {
      if (TaxTable[i].MIN < TaxableIncome && TaxableIncome <= TaxTable[i].MAX) {
        setTax(
          TaxTable[i].BASE +
            (TaxableIncome - TaxTable[i].MIN) * TaxTable[i].RATE
        );
        return;
      }
    }
  };
  return (
    <div className="text-center grid gap-y-6">
      <Header />
      <IncomeInput income={income} handleIncomeChange={handleIncomeChange} />
      <CalculateTax calTax={calTax} income={income} />
      <TaxResult result={tax} />
    </div>
  );
};
export default TaxCalculator;
