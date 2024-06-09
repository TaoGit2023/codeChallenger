const CalculateTax = ({ calTax, income }) => {
  
  return (
  <div>
    <button onClick={()=>calTax(income)} className="border-2 border-none rounded-md p-1 bg-blue-500 text-white">
      Calculate
    </button>
  </div>
)};

export default CalculateTax;
