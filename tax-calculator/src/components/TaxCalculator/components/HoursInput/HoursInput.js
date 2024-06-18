const HoursInput = ({ hours, handleHours }) => {
  return (
    <div>
      <label>Input Your Working Hours:</label>
      <input
        type="number"
        id=" hours"
        name="hours"
        value={hours}
        onChange={handleHours}
        className="border-2 border-black rounded-md p-1"
      />
    </div>
  );
};
export default HoursInput;
