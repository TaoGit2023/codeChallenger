const Select = ({ labelName, options, selectedOption, selectChange }) => {
  return(
  <div>
    <label>{labelName}: </label>
    <select
      value={selectedOption}
      onChange={selectChange}
      className="border-2 border-black border-solid rounded-md">
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  </div>);
};
export default Select;
