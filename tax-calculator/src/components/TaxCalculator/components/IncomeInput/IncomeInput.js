const IncomeInput = ({ inputLabel, inputValue, inputHandler }) => {
  return (
    <div>
      <label>{inputLabel}:</label>
      <input
        type="number"
        id={inputLabel}
        name={inputLabel}
        value={inputValue}
        onChange={inputHandler}
        className="border-2 border-black rounded-md p-1"
      />
    </div>
  );
};
export default IncomeInput;
