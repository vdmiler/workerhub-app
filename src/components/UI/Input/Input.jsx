import React from 'react';
import './Input.scss';

const Input = ({ type = "text", classes = "", name = "", placeholder = "", handleChangeInput = () => { }, valueInput }) => {
   return (
      <>
         <input
            type={type}
            className={`${classes} input`}
            name={name}
            placeholder={placeholder}
            onChange={handleChangeInput}
            value={valueInput}
         />
      </>
   );
}

export default Input;