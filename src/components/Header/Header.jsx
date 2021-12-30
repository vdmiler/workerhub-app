import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { dataCities } from '../../constans';
import { fetchSummariesData } from '../../store/slices/summariesDataSlice';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import LoginForm from '../UI/LoginForm/LoginForm';
import Modal from '../UI/Modal/Modal';
import './Header.scss';


const Header = () => {
   const navigate = useNavigate();
   const location = useLocation();

   const [isActiveModal, setActiveModal] = useState(false);

   const dispatch = useDispatch();
   const [lang, setLang] = useState(false);
   const [valuePosition, setValuePosition] = useState('');
   const [valueCity, setValueCity] = useState('');

   const [filterCity, setFilterCity] = useState([]);
   const [isActivePanel, setActivePanel] = useState(true);

   const handleCityFilter = (e) => {
      setValueCity(e.target.value);
      const newFilter = dataCities.filter(city => {
         return city.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      })
      if (e.target.value === '') {
         setFilterCity([]);
         setActivePanel(true);
      } else {
         setFilterCity(newFilter);
      }
   }

   const plugText = useRef('');

   if (document.body.clientWidth < 767.98) {
      plugText.current = 'Поиск';
   } else {
      plugText.current = 'На какую должность вы ищете кандидата?';
   }
   return (
      <>
         <header className="header" id="header">
            <div className={`header__top-bar top-bar ${location.pathname !== '/' ? '_light' : ''}`}>
               <div className="top-bar__container _container">
                  <div className="top-bar__body">
                     <nav className="top-bar__menu menu">
                        <ul className="menu__list">
                           <li className="menu__item">
                              <a href="#" className="menu__link">
                                 Соискатель
                              </a>
                           </li>
                           <li className="menu__item _active">
                              <a href="#" className="menu__link">
                                 Работодатель
                              </a>
                           </li>
                           <li className="menu__item">
                              <a href="#" className="menu__link">
                                 HR
                              </a>
                           </li>
                        </ul>
                     </nav>
                     <div className="top-bar__wrapper">
                        <div className="top-bar__lang lang">
                           <div className="lang__icon">
                              <i className="_icon-lang"></i>
                           </div>
                           <ul className="lang__list">
                              <li className={`lang__item ${lang === true ? '_active' : ''} `}>
                                 RU
                              </li>
                              <li className={`lang__item ${lang === false ? '_active' : ''} `}>
                                 EN
                              </li>
                           </ul>
                           <button className="lang__btn" onClick={() => setLang(!lang)}>
                              <i className="_icon-arrow-down"></i>
                           </button>
                        </div>
                        <button className="top-bar__login" onClick={() => setActiveModal(true)}>
                           Войти
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="header__offer offer">
               <div className="offer__container _container">
                  <div className="offer__body">
                     <button className="offer__hamburger-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                     </button>
                     <p className={`offer__text ${location.pathname !== '/' ? '_disabled' : ''}`}>
                        Сайт по поиску работы №1
                     </p>
                     <h1 className={`offer__title ${location.pathname !== '/' ? '_disabled' : ''}`}>
                        Please enter the vacancy and the city
                     </h1>
                     <form className="offer__search-panel search-panel">
                        <div className="search-panel__item">
                           <Input
                              classes="search-panel__input search-panel__input_position"
                              name="position"
                              placeholder={plugText.current}
                              handleChangeInput={e => setValuePosition(e.target.value)}
                              valueInput={valuePosition}
                           />
                        </div>
                        <div className="search-panel__item">
                           <Input
                              classes="search-panel__input search-panel__input_city"
                              name="city"
                              placeholder="Город"
                              handleChangeInput={handleCityFilter}
                              valueInput={valueCity}
                           />
                           <ul className={`search-panel__results ${filterCity.length !== 0 && isActivePanel ? '_active' : ''}`}>
                              {
                                 filterCity.map((city, index) => {
                                    return (
                                       <li
                                          key={`city-id_${index}`}
                                          className='search-panel__results-item'
                                          onClick={() => {
                                             setValueCity(city.name);
                                             setActivePanel(false);
                                          }}
                                       >
                                          {city.name}
                                       </li>
                                    )
                                 })
                              }
                           </ul>
                        </div>
                        <Button
                           content="Найти кандидатов"
                           classes={`search-panel__btn ${location.pathname !== '/' ? '_light' : ''}`}
                           handleClick={() => {
                              dispatch(fetchSummariesData({ searchQuery: valuePosition, filterCity: valueCity }));
                              localStorage.setItem('from', location.pathname);
                              navigate('/summaries');
                           }}
                        />
                     </form>
                  </div>
               </div>
            </div>
         </header>
         <Modal
            isActive={isActiveModal}
            handleClick={() => setActiveModal(false)}
         >
            <LoginForm />
         </Modal>
      </>

   );
}

export default Header;