const IncomeInput = ({ income, handleIncomeChange }) => {
  return (
    <div>
      <label>Input Your annual Taxable Income:</label>
      <input
        type="number"
        id="income"
        name="income"
        value={income}
        onChange={handleIncomeChange}
        className="border-2 border-black rounded-md p-1"
      />
    </div>
  );
};
export default IncomeInput;
