
const [selectedFilter, setSelectedFilter] = useState("all");


const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
  const isActive = (filter) => {
    return filter === selectedFilter ? "active" : "";
  };




<div className="filter-container">
<div className={`btn btn-secondary ${isActive("all")}`}>
  <div className="filter-item">
    <img src="/image/store_image/HOME.png" alt="Home" />
    <input
      type="radio"
      name="options"
      id="option1"
      autoComplete="off"
      defaultChecked=""
      onClick={() => handleFilterChange("all")}
    />
    All
  </div>
</div>
<div className={`btn btn-secondary ${isActive("accessories")}`}>
  <div className="filter-item">
    <img src="/image/store_image/Accessories.png" alt="Accessories" />
    <input
      type="radio"
      name="options"
      id="option2"
      autoComplete="off"
      onClick={() => handleFilterChange("accessories")}
    />
    Accessories
  </div>
</div>
<div className={`btn btn-secondary ${isActive("weights")}`}>
  <div className="filter-item">
    <img src="/image/store_image/Weights.png" alt="Weights" />
    <input
      type="radio"
      name="options"
      id="option3"
      autoComplete="off"
      onClick={() => handleFilterChange("weights")}
    />
    Weights
  </div>
</div>
<div className={`btn btn-secondary ${isActive("cardio")}`}>
  <div className="filter-item">
    <img src="/image/store_image/Cardio.png" alt="Cardio" />
    <input
      type="radio"
      name="options"
      id="option4"
      autoComplete="off"
      onClick={() => handleFilterChange("cardio")}
    />
    Cardio
  </div>
</div>
<div className={`btn btn-secondary ${isActive("strength")}`}>
  <div className="filter-item">
    <img src="/image/store_image/Strength.png" alt="Strength" />
    <input
      type="radio"
      name="options"
      id="option5"
      autoComplete="off"
      onClick={() => handleFilterChange("strength")}
    />
    Strength
  </div>
</div>
</div>