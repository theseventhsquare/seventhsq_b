import './Auto.css'
const SuggestionsList = props => {
    const {
      suggestions,
      inputValue,
      onSelectSuggestion,
      displaySuggestions,
      selectedSuggestion
    } = props;
  
    if (inputValue && displaySuggestions) {
      if (suggestions.length > 0) {
        return (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => {
              const isSelected = selectedSuggestion === index;
              const classname = `suggestion ${isSelected ? "selected" : ""}`;
              return (
                <li
                  key={index}
                  className={classname}
                  onClick={() => onSelectSuggestion(index)}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return  <ul className="suggestions-list">
            <li className='suggestion'>
            No suggestions available..
                </li>
            
        </ul>
        
       
      }
    }
    return <></>;
  };

  export default SuggestionsList