import React from 'react';
import { actualVacancies } from '../../constans';
import './SectionActual.scss';

const SectionActual = () => {
   return (
      <section className="actual" id="actual">
         <div className="actual__container _container">
            <div className="actual__body">
               <ul className="actual__list">
                  {
                     actualVacancies.map(item => {
                        return (
                           <li className="actual__item" key={item.id}>
                              <div className="actual__wrapper">
                                 <div className="actual__counter">
                                    {item.count}
                                 </div>
                                 <h3 className="actual__text">
                                    {item.title}
                                 </h3>
                              </div>
                           </li>
                        )
                     })
                  }
               </ul>
            </div>
         </div>
      </section>
   );
}

export default SectionActual;