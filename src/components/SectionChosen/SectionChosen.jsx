import React from 'react';
import { logoImages } from '../../constans';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import './SectionChosen.scss';

const SectionChosen = () => {
   return (
      <section className="chosen" id="chosen">
         <div className="chosen__container _container">
            <div className="chosen__body">
               <SectionTitle
                  classes="chosen__title"
               >
                  Нас выбрали
               </SectionTitle>
               <ul className="chosen__list">
                  {
                     logoImages.map(item => {
                        return (
                           <li className="chosen__item" key={`img-id_${item.id}`}>
                              <a href={item.link} className="chosen__link">
                                 <img src={item.img} alt="" />
                              </a>
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

export default SectionChosen;