import { useEffect, useState } from "react";
import CalculateTax from "./components/CalculateTax/CalculateTax";
import Header from "./components/Header/Header";
import IncomeInput from "./components/IncomeInput/IncomeInput";
import TaxResult from "./components/TaxResult/TaxResult";
import Select from "./components/Select/Select";

const TaxCalculator = () => {
  const [tax, setTax] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [hourlyIncome, setHourlyIncome] = useState(0);
  const [hours, setHours] = useState(0);
  const employmentTypeOptions = [
    "FullTime",
    "PartTime",
    "Casual",
    "Contractor",
  ];
  const incomeTypeOptions = ["Annual", "Monthly", "Hourly"];
  const [employmentType, setEmploymentType] = useState(
    employmentTypeOptions[0]
  );
  const [incomeType, setIncomeType] = useState(incomeTypeOptions[0]);
  const handleAnnualIncomeChange = (event) => {
    if (event.target.value < 0) {
      setAnnualIncome(0);
    } else {
      setAnnualIncome(event.target.value);
    }
  };
  const handleMonthly = (event) => {
    if (event.target.value < 0) {
      setMonthlyIncome(0);
    } else {
      setMonthlyIncome(event.target.value);
    }
  };
  const handleHourly = (event) => {
    if (event.target.value < 0) {
      setHourlyIncome(0);
    } else {
      setHourlyIncome(event.target.value);
    }
  };
  const handleHours = (event) => {
    if (event.target.value < 0) {
      setHours(0);
    } else {
      setHours(event.target.value);
    }
  };
  const handleIncomeType = (event) => {
    setIncomeType(event.target.value);
  };
  const handleEmploymentType = (event) => {
    setEmploymentType(event.target.value);
  };
  useEffect(() => {
    console.log(1);
  }, [incomeType]);
  const calTax = (TaxableIncome, MonthlyIncome, HourlyIncome, Hours) => {
    TaxableIncome = TaxableIncome + MonthlyIncome * 12 + HourlyIncome * Hours;
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
      {/* <EmploymentTypeSelection />
      <IncomeTypeSelection handleIncomeType={handleIncomeType}/> */}
      <Select
        labelName="Employment Type Selection"
        options={employmentTypeOptions}
        selectedOption={employmentType}
        selectChange={handleEmploymentType}
      />
      <Select
        labelName="Income Type Selection"
        options={incomeTypeOptions}
        selectedOption={incomeType}
        selectChange={handleIncomeType}
      />
      {incomeType === "Annual" ? (
        <IncomeInput
          inputLabel={"AnnualIncome"}
          inputValue={annualIncome}
          inputHandler={handleAnnualIncomeChange}
        />
      ) : incomeType === "Monthly" ? (
        <IncomeInput
          inputLabel={"MonthlyIncome"}
          inputValue={monthlyIncome}
          inputHandler={handleMonthly}
        />
      ) : incomeType === "Hourly" ? (
        <>
          <IncomeInput
            inputLabel={"HourlyIncome"}
            inputValue={hourlyIncome}
            inputHandler={handleHourly}
          />
          <IncomeInput
            inputLabel={"Hours"}
            inputValue={hours}
            inputHandler={handleHours}
          />
        </>
      ) : null}
      {/* <IncomeInput income={income} handleIncomeChange={handleIncomeChange} /> */}
      <CalculateTax
        calTax={calTax}
        annualIncome={annualIncome}
        monthlyIncome={monthlyIncome}
        hourlyIncome={hourlyIncome}
        hours={hours}
      />
      <TaxResult result={tax} />
    </div>
  );
};
export default TaxCalculator;
