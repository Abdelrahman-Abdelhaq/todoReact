import { useState } from "react";
import FilterOptions from "./FilterOptions";

const Filter = ({ setFilter }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState("All"); 

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  const closeFilter = () => setIsFilterOpen(false);

  const handleSelect = (option) => {
    setSelectedOption(option);    
    setFilter(option.toLowerCase()); 
    closeFilter();                
  };

  return (
    <div className="filter-container" id="custom-filter">
      <div className="filter-selected" onClick={toggleFilter}>{selectedOption}</div>
      <FilterOptions 
        isOpen={isFilterOpen} 
        handleSelect={handleSelect} 
      />
    </div>
  );
};

export default Filter;
