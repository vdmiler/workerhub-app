import React, { useEffect } from 'react';
import './PositionList.scss';
import PositionItem from '../PositionItem/PositionItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummariesData } from '../../../store/slices/summariesDataSlice';
import Loader from '../Loader/Loader';

const PositionList = () => {
   const dispath = useDispatch();
   const { currentItems, loadingProgress } = useSelector(state => state.summariesData);
   useEffect(() => {
      if (localStorage.getItem('from') === null || localStorage.getItem('from') !== '/') {
         dispath(fetchSummariesData({}))
      }
      localStorage.removeItem('from')
   }, [])

   return (
      <ul className="position__list">
         {
            loadingProgress ? <Loader /> :
               currentItems && currentItems.map((item, index) => {
                  return (
                     <PositionItem {...item} key={`post_${index}`} />
                  )
               })
         }
      </ul>
   );
}

export default PositionList;