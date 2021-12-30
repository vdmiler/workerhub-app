import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAgeOfApplicant, getWorkExperience, getСurrentDate } from '../../../constans';
import { setModifiedData } from '../../../store/slices/summariesDataSlice';
import { setWishes } from '../../../store/slices/wishlistSlice';
import './PositionItem.scss';
import placeholder from '../../../assets/img/avatar_m.png';

const PositionItem = ({
   id,
   photo,
   desiredposition,
   workexperience,
   birthday,
   first_name,
   work_city,
   updated_at,
   selected
}) => {
   const [extraMenu, setExtraMenu] = useState(false);

   const dispatch = useDispatch();
   const { summariesData } = useSelector(state => state.summariesData);

   const addToWishlist = (id) => {
      const newData = summariesData.map(selectItem => {
         if (selectItem.id === id) {
            return {
               ...selectItem,
               selected: !selected
            }
         } else {
            return selectItem
         }
      })
      dispatch(setModifiedData(newData))
      dispatch(setWishes(newData.filter(wishItem => wishItem.selected === true)))
      localStorage.setItem('wishes', JSON.stringify(newData))
   }
   useEffect(() => {
      const localWishes = JSON.parse(localStorage.getItem('wishes'))
      if (localWishes !== null && localWishes.length > 0) {
         dispatch(setModifiedData(localWishes))
      }
   }, [])
   return (
      <li className="position__item">
         <div className="position__avatar">
            {
               photo ? (
                  <img src={photo} alt="" className="position__img" />
               ) : <img src={placeholder} alt="" className="position__img" />
            }
         </div>
         <div className="position__description">
            <div className="position__header">
               <div className="position__avatar">
                  {
                     photo ? (
                        <img src={photo} alt="" className="position__img" />
                     ) : <img src={placeholder} alt="" className="position__img" />
                  }
               </div>
               <div className="position__wrapp">
                  <h3 className="position__title">
                     {desiredposition}
                  </h3>
                  <div className="details__info">
                     {
                        first_name && birthday && work_city ? (
                           <>
                              <p className="details__nameAge">
                                 {`${first_name}, ${getAgeOfApplicant(birthday)}`}
                              </p>
                              <div className="details__local">
                                 <i className="_icon-local"></i>
                                 <p className="details__city">
                                    {work_city}
                                 </p>
                              </div>
                           </>
                        ) : null
                     }
                  </div>
               </div>
            </div>
            <div className="position__details details">
               <div className="details__info">
                  {
                     first_name && birthday && work_city ? (
                        <>
                           <p className="details__nameAge">
                              {`${first_name}, ${getAgeOfApplicant(birthday)}`}
                           </p>
                           <div className="details__local">
                              <i className="_icon-local"></i>
                              <p className="details__city">
                                 {work_city}
                              </p>
                           </div>
                        </>
                     ) : null
                  }
               </div>
               <ul className="details__experience experience">
                  {
                     workexperience && workexperience.map(el => {
                        return (
                           <li className="experience__item" key={`exp_${el.id}`}>
                              {`${el.company_name} - ${getWorkExperience(el.date_from, el.date_to)} мес.`}
                           </li>
                        )
                     })
                  }
               </ul>
               <div className="details__updated updated">
                  <p className="updated__text">
                     {`Обновлено ${getСurrentDate(updated_at)}`}
                  </p>
                  <div className="updated__indicator">
                     <div className="updated__icon"></div>
                     <p className="updated__online">
                        Онлайн
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="position__settings">
            <div className={`position__wishlist ${selected ? '_active' : ''}`} onClick={() => addToWishlist(id)}>
               <i className="_icon-heart"></i>
            </div>
            <div className="position__extra extra" onClick={() => setExtraMenu(!extraMenu)}>
               <i className="_icon-dots"></i>
               <div className={`extra__menu ${extraMenu ? '_active' : ''}`}>
                  <ul className="extra__list">
                     <li className="extra__item">
                        <a href="#" className="extra__link">
                           Пожаловаться
                        </a>
                     </li>
                     <li className="extra__item">
                        <a href="#" className="extra__link">
                           Скрыть кандидата
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </li>
   );
}

export default PositionItem;