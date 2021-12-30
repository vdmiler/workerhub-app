import React from 'react';
import './RadioToggler.scss';

const RadioToggler = ({ id, imgSrc = null, inputName, text = '', color = false, total }) => {
   return (
      <div className="radio-toggler__item">
         <label className="radio-toggler__label">
            <input type="radio" name={inputName} className={`radio-toggler__checkbox ${color ? '_yellow' : ''}`} defaultChecked={id === 0 ? true : false} />
            <span className="radio-toggler__switcher">{text}</span>
         </label>
         {
            imgSrc ? (
               <img src={imgSrc} alt="" className="radio-toggler__img"></img>
            ) : null
         }
         <div className="radio-toggler__total">
            {total}
         </div>
      </div>
   );
}

export default RadioToggler;