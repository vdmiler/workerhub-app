import React from 'react';
import './Button.scss';

const Button = ({ type = "button", classes = '', content = "", handleClick = () => { } }) => {
   return (
      <>
         <button type={type} className={`${classes} btn`} onClick={handleClick}>
            {content}
         </button>
      </>
   );
}

export default Button;