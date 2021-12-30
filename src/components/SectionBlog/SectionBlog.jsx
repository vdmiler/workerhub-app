import React from 'react';
import './SectionBlog.scss';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Slider from '../UI/Slider/Slider';

const SectionBlog = () => {
   return (
      <section className="blog" id="blog">
         <div className="blog__container _container">
            <div className="blog__body">
               <div className="blog__wrapper">
                  <SectionTitle
                     classes="blog__title"
                  >
                     Блог
                  </SectionTitle>
                  <a href="#" className="blog__link">
                     All Articles
                  </a>
               </div>
               <Slider />
            </div>
         </div>
      </section>
   );
}

export default SectionBlog;