import React, { useEffect, useState } from 'react';
import './SectionSummaries.scss';
import PositionList from '../UI/PositionList/PositionList';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import { useSelector } from 'react-redux';
import { busynessData, educationData, getFormatNumber } from '../../constans';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { fetchFiltersData, setCurrentItems, setModifiedData } from '../../store/slices/summariesDataSlice';
import FilterItem from '../UI/FilterItem/FilterItem';
import RangeSlider from '../UI/RangeSlider/RangeSlider';
import Accordion from '../UI/Accordion/Accordion';
import FlagCheckbox from '../UI/FlagCheckbox/FlagCheckbox';
import RadioButtons from '../UI/RadioButtons/RadioButtons';
import RadioToggler from '../UI/RadioToggler/RadioToggler';
import filters_menu from '../../assets/img/filters-menu.svg';

const SectionSummaries = () => {
   const dispatch = useDispatch();
   const { summariesData, loadingProgress } = useSelector(state => state.summariesData)
   const itemsPerPage = 5;
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);

   useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      dispatch(setCurrentItems(summariesData.slice(itemOffset, endOffset)));
      setPageCount(Math.ceil(summariesData.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, summariesData]);

   const handlePageClick = (e) => {
      const newOffset = (e.selected * itemsPerPage) % summariesData.length;
      setItemOffset(newOffset);
   }
   return (
      <section className="summaries" id="summaries">
         <div className="summaries__container _container">
            <div className="summaries__body">
               <div className="summaries__list">
                  <div className="summaries__header">
                     <button className="summaries__filter-btn">
                        <img src={filters_menu} alt="" />
                     </button>
                     <SectionTitle
                        classes="summaries__title"
                     >
                        ???? ?????????????????? <span style={{ color: '#851fff' }}>{!summariesData.length ? 0 : getFormatNumber(summariesData.length)}</span> ????????????
                     </SectionTitle>
                     <div className="summaries__sorting">
                        <div className="summaries__text">???????????? ???????????????? ?????????????????????? ???? ???????? ??????????????</div>
                        <div className="summaries__dropdown dropdown">
                           <span className="dropdown__item">???? ?????? ??????????</span><i className="_icon-arrow-down"></i>
                        </div>
                     </div>
                  </div>
                  <PositionList />
                  {
                     summariesData.length >= 10 ? (
                        <ReactPaginate
                           containerClassName="pagination"
                           pageClassName="page-item"
                           pageLinkClassName="page-link"
                           previousClassName="page-item"
                           previousLinkClassName="page-link"
                           nextClassName="page-item"
                           nextLinkClassName="page-link"
                           breakClassName="page-item"
                           breakLinkClassName="page-link"
                           activeClassName="_active"
                           breakLabel="..."
                           nextLabel=">"
                           onPageChange={handlePageClick}
                           pageRangeDisplayed={5}
                           pageCount={pageCount}
                           previousLabel="<"
                           renderOnZeroPageCount={null}
                        />
                     ) : null
                  }
                  {
                     summariesData.length === 0 && loadingProgress ? (
                        <h3 style={{ textAlign: 'center' }}>Not found</h3>
                     ) : null
                  }
               </div>
               <div className="summaries__filters filters">
                  <h3 className="filters__title">
                     ??????????????
                  </h3>
                  <FilterItem
                     classes="filters__photo"
                  >
                     <FlagCheckbox
                        text="???????????? ?? ??????????????????????"
                        iconClass="_icon-picture"
                     />
                  </FilterItem>
                  <FilterItem
                     title="??????????????"
                     classes="filters__age"
                  >
                     <RangeSlider
                        minNum={0}
                        maxNum={100}
                     />
                  </FilterItem>
                  <FilterItem
                     title="??????"
                     classes="filters__gender"
                  >
                     <RadioButtons
                        inputName="gender"
                        arraylabels={[
                           '??????????',
                           '??????????????',
                           '??????????????'
                        ]}
                     />
                  </FilterItem>
                  <FilterItem
                     title="???????????????? ???????????????? ?? ????????????"
                     classes="filters__salary"
                  >
                     <RangeSlider
                        minNum={0}
                        maxNum={10000}
                     />
                     <FlagCheckbox
                        text="???? ???????????????????? ?????? ????????????????"
                     />
                  </FilterItem>
                  <FilterItem
                     title="???????? ????????????"
                     classes="filters__experience"
                  >
                     <FlagCheckbox
                        text="???????????? ????????????????"
                        iconClass="_icon-student"
                     />
                  </FilterItem>
                  <FilterItem
                     title="???????????????? ??????????????"
                     classes="filters__langs"
                  >
                     <Accordion />
                  </FilterItem>
                  <FilterItem
                     title="?????? ??????????????????"
                     classes="filters__busy"
                  >
                     {
                        busynessData.map(item => {
                           return (
                              <RadioToggler
                                 key={item.id}
                                 id={item.id}
                                 inputName={item.name}
                                 text={item.label}
                                 total={item.total}
                              />
                           )
                        })
                     }
                  </FilterItem>
                  <FilterItem
                     title="??????????????????????"
                     classes="filters__education"
                  >
                     {
                        educationData.map(item => {
                           return (
                              <RadioToggler
                                 key={item.id}
                                 id={item.id}
                                 inputName={item.name}
                                 text={item.label}
                                 total={item.total}
                              />
                           )
                        })
                     }
                  </FilterItem>
               </div>
            </div>
         </div>
      </section>
   );
}

export default SectionSummaries;