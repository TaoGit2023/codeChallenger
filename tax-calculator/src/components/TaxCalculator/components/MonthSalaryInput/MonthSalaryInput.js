const MonthSalaryInput = ({ monthlyIncome, handleMonthly }) => {
  return (
    <div>
      <label>Input Your Monthly Income:</label>
      <input
        type="number"
        id=" monthlyIncome"
        name="monthlyIncome"
        value={monthlyIncome}
        onChange={handleMonthly}
        className="border-2 border-black rounded-md p-1"
      />
    </div>
  );
};
export default MonthSalaryInput;
