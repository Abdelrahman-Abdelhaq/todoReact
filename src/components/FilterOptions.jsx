const FilterOptions = ({ isOpen, handleSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="filter-options" id="filter-options">
      <div className="filter-option" onClick={() => handleSelect("All")}>All</div>
      <div className="filter-option" onClick={() => handleSelect("Complete")}>Complete</div>
      <div className="filter-option" onClick={() => handleSelect("Incomplete")}>Incomplete</div>
    </div>
  );
};

export default FilterOptions;
