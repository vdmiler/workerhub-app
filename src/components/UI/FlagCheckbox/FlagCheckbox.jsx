import React from 'react';
import './FlagCheckbox.scss';

const FlagCheckbox = ({ iconClass = null, text = '', inputName = '' }) => {
   return (
      <div className="flag-checkbox">
         {
            iconClass ? (
               <i className={`flag-checkbox__ico ${iconClass}`}></i>
            ) : null
         }
         <div className="flag-checkbox__text">{text}</div>
         <label className="flag-checkbox__label">
            <input type="checkbox" name={inputName} className="flag-checkbox__checkbox" />
            <span className="flag-checkbox__switcher"></span>
         </label>
      </div>
   );
}

export default FlagCheckbox;