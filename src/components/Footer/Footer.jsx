import React from 'react';
import './Footer.scss';
import { footerMenu, footerSocial } from '../../constans';
import MobileAppLinks from '../UI/MobileAppLinks/MobileAppLinks';

const Footer = () => {
   const titlesArray = Object.keys(footerMenu);
   const date = new Date();
   const yaer = date.getFullYear();
   return (
      <footer className="footer" id="footer">
         <div className="footer__container _container">
            <div className="footer__body">
               <div className="footer__links links">
                  <div className="links__wrapp">
                     <h5 className="links__title">
                        {titlesArray[0]}
                     </h5>
                     <ul className="links__list">
                        {
                           footerMenu['Job Seekers'].map(item => {
                              return (
                                 <li className="links__item" key={`menu-id_${item.id}`}>
                                    <a href={item.path} className="links__reference">
                                       {item.label}
                                    </a>
                                 </li>
                              )
                           })
                        }
                     </ul>
                  </div>
                  <div className="links__wrapp">
                     <h5 className="links__title">
                        {titlesArray[1]}
                     </h5>
                     <ul className="links__list">
                        {
                           footerMenu['Employer'].map(item => {
                              return (
                                 <li className="links__item" key={item.id}>
                                    <a href={item.path} className="links__reference">
                                       {item.label}
                                    </a>
                                 </li>
                              )
                           })
                        }
                     </ul>
                  </div>
                  <div className="links__wrapp">
                     <h5 className="links__title">
                        {titlesArray[2]}
                     </h5>
                     <ul className="links__list">
                        {
                           footerMenu['Job meteor'].map(item => {
                              return (
                                 <li className="links__item" key={item.id}>
                                    <a href={item.path} className="links__reference">
                                       {item.label}
                                    </a>
                                 </li>
                              )
                           })
                        }
                     </ul>
                  </div>
                  <div className="links__wrapp">
                     <h5 className="links__title">
                        {titlesArray[3]}
                     </h5>
                     <ul className="links__list">
                        {
                           footerMenu['Partner with Us'].map(item => {
                              return (
                                 <li className="links__item" key={item.id}>
                                    <a href={item.path} className="links__reference">
                                       {item.label}
                                    </a>
                                 </li>
                              )
                           })
                        }
                     </ul>
                  </div>
               </div>
               <div className="footer__social social">
                  <ul className="social__list">
                     {
                        footerSocial.map(link => {
                           return (
                              <li className="social__item" key={`social-id_${link.id}`}>
                                 <a href={link.path} className="social__link" target="_blank" rel="noreferrer">
                                    <i className={link.icon}></i>
                                 </a>
                              </li>
                           )
                        })
                     }
                  </ul>
                  <MobileAppLinks
                     classWrapper="footer__apps"
                     classItem="footer__apps-link"
                  />
               </div>
               <ul className="footer__copyright copyright">
                  <li className="copyright__item">
                     <a href="#" className="copyright__link">
                        Privacy Policy
                     </a>
                  </li>
                  <li className="copyright__item">
                     <a href="#" className="copyright__link">
                        &#169; {yaer} Job Meteor. All rights reserved
                     </a>
                  </li>
                  <li className="copyright__item">
                     <a href="#" className="copyright__link">
                        Terms of Use
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
}

export default Footer;