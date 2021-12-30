import React from 'react';
import './SectionPublish.scss';
import Button from '../UI/Button/Button';
import space_img from '../../assets/img/space.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const SectionPublish = () => {
   return (
      <section className="publish" id="publish">
         <div className="publish__container _container">
            <div className="publish__body">
               <div className="publish__ad ad">
                  <div className="ad__picture">
                     <img src={space_img} alt="" className="ad__img" />
                  </div>
                  <div className="ad__content">
                     <SectionTitle
                        classes="ad__title"
                     >
                        Разместить вакансию
                     </SectionTitle>
                     <p className="ad__text">
                        Работодатель смогут найти вас и предложить отличную работу.
                     </p>
                  </div>
               </div>
               <Button
                  classes="publish__btn"
                  content="Разместить вакансию"
               />
            </div>
         </div>
      </section>
   );
}

export default SectionPublish;