import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import './RangeSlider.scss';

const RangeSlider = ({minNum, maxNum}) => {
   const [values, setValues] = useState([(minNum + (maxNum / 100 * 10)), (maxNum - (maxNum / 100 * 10))]);
   return (
      <div className="range__slider">
         <div className="range__input">
            <span className="range__start">от</span>
            <Range
               step={0.1}
               min={minNum}
               max={maxNum}
               values={values}
               onChange={values => setValues(values)}
               renderTrack={({ props, children }) => (
                  <div
                     onMouseDown={props.onMouseDown}
                     onTouchStart={props.onTouchStart}
                     style={{
                        ...props.style,
                        height: "1px",
                        display: "flex",
                        width: "200px"
                     }}
                  >
                     <div
                        ref={props.ref}
                        style={{
                           height: "1px",
                           width: "200px",
                           background: getTrackBackground({
                              values,
                              colors: ["#555556", "#851fff", "#555556"],
                              min: 0,
                              max: 100
                           }),
                           alignSelf: "center"
                        }}
                     >
                        {children}
                     </div>
                  </div>
               )}
               renderThumb={({ props, isDragged }) => (
                  <div
                     {...props}
                     style={{
                        ...props.style,
                        height: '16px',
                        width: '16px',
                        borderRadius: '50%',
                        backgroundColor: '#851fff'
                     }}
                  >
                     <div
                        style={{
                           position: 'absolute',
                           top: '50%',
                           left: '50%',
                           transform: 'translate(-50%, -50%)',
                           width: '16px',
                           height: '16px',
                           borderRadius: '50%',
                           border: isDragged ? '4px solid #c28eff' : 'none'
                        }}
                     />
                  </div>
               )}
            />
            <span className="range__end">до</span>
         </div>
         {
            <output id="output">
               <span className="output__start">
                  от
               </span>
               <div className="output__numb">
                  <p>{values[0].toFixed(1)}</p>
               </div>
               <span className="output__end">
                  до
               </span>
               <div className="output__numb">
                  <p>{values[1].toFixed(1)}</p>
               </div>
            </output>
         }
      </div>
   );
}

export default RangeSlider;