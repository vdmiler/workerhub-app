import React from 'react';
import './FilterItem.scss';

const FilterItem = ({ classes = '', children, title = null }) => {
   return (
      <div className={`filters__item ${classes}`}>
         {
            title ? (
               <h4 className='filters__itemTitle'>
                  {title}
               </h4>
            ) : null
         }
         {children}
      </div>
   );
}

export default FilterItem;