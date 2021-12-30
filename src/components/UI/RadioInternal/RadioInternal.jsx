import React from 'react';
import './RadioInternal.scss';

const RadioInternal = ({ inputName, text = '', total }) => {
   return (
      <div className="radio-internal__item">
         <label className="radio-internal__label">
            <input type="radio" name={inputName} className="radio-internal__checkbox" />
            <span className="radio-internal__switcher">{text}</span>
         </label>
         <div className="radio-internal__total">
            {total}
         </div>
      </div>
   );
}

export default RadioInternal;