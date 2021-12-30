import React from 'react';
import './SectionDownload.scss';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import MobileAppLinks from '../UI/MobileAppLinks/MobileAppLinks';

const SectionDownload = () => {
   return (
      <section className="download" id="download">
         <div className="download__jaw">
            <div className="download__container _container">
               <div className="download__body">
                  <div className="download__picture"></div>
                  <div className="download__content">
                     <SectionTitle
                        classes="download__title"
                     >
                        Скачивайте приложение
                     </SectionTitle>
                     <p className="download__text">
                        Работодатель смогут найти вас и предложить отличную работу.
                     </p>
                  </div>
                  <MobileAppLinks
                     classWrapper="download__apps"
                     classItem="download__link"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default SectionDownload;