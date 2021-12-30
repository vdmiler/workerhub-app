import React, { useState } from 'react';
import { langsData } from '../../../constans';
import RadioToggler from '../RadioToggler/RadioToggler';
import './Accordion.scss';

const Accordion = () => {
   const [clicked, setClicked] = useState(null);

   const toggle = index => {
      if (clicked === index) {
         return setClicked(null)
      }
      setClicked(index)
   }
   return (
      <div className="accordion">
         <ul className="accordion__list">
            {
               langsData.map((item, index) => {
                  return (
                     <div className="accordion__item" key={index}>
                        <div className="accordion__header" onClick={() => toggle(index)}>
                           <RadioToggler
                              id={item.id}
                              inputName={item.name}
                              text={item.label}
                              imgSrc={item.img}
                              color={true}
                              total={item.total}
                           />
                           {
                              item.levels ? (
                                 <i className={`_icon-arrow-down ${clicked === index ? '_active' : ''}`}></i>
                              ) : null
                           }
                        </div>
                        {
                           clicked === index ? (
                              <div className="accordion__dropdown">
                                 {
                                    item.levels ? item.levels.map(subItem => {
                                       return (
                                          <RadioToggler
                                             key={subItem.id}
                                             id={subItem.id}
                                             inputName={subItem.name}
                                             text={subItem.label}
                                             color={true}
                                             total={subItem.total}
                                          />
                                       )
                                    }) : null
                                 }
                              </div>
                           ) : null
                        }
                     </div>
                  )
               })
            }

         </ul>
      </div>
   );
}

export default Accordion;