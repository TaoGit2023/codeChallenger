const HoursSalaryInput = ({ hourlyIncome, handleHourly}) => {
  return (
    <div>
      <label>Input Your Hourly Income:</label>
      <input
        type="number"
        id=" hourlyIncome"
        name="hourlyIncome"
        value={hourlyIncome}
        onChange={handleHourly}
        className="border-2 border-black rounded-md p-1"
      />
    </div>
  );
};
export default HoursSalaryInput;
