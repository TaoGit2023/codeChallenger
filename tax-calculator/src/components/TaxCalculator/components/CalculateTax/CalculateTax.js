const CalculateTax = ({ calTax, annualIncome,monthlyIncome, hourlyIncome, hours }) => {
  
  return (
    <div>
      <button
        onClick={() => calTax(annualIncome, monthlyIncome, hourlyIncome, hours)}
        className="border-2 border-none rounded-md p-1 bg-blue-500 text-white">
        Calculate
      </button>
    </div>
  );};

export default CalculateTax;
