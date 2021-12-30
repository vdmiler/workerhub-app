import React from 'react';
import './RadioButtons.scss';

const RadioButtons = ({ inputName, arraylabels }) => {
   return (
      <div className="radio-buttons">
         <label className="radio-buttons__label">
            <input type="radio" name={inputName} className="radio-buttons__checkbox" defaultChecked />
            <span className="radio-buttons__switcher">{arraylabels[0]}</span>
         </label>
         <label className="radio-buttons__label">
            <input type="radio" name={inputName} className="radio-buttons__checkbox" />
            <span className="radio-buttons__switcher">{arraylabels[1]}</span>
         </label>
         <label className="radio-buttons__label">
            <input type="radio" name={inputName} className="radio-buttons__checkbox" />
            <span className="radio-buttons__switcher">{arraylabels[2]}</span>
         </label>
      </div>
   );
}

export default RadioButtons;