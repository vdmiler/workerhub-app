import React from 'react';
import './MobileAppLinks.scss';

const MobileAppLinks = ({ appStoreLink = "#", googlePlayLink = "#", classWrapper = "", classItem = "" }) => {
   return (
      <div className={`${classWrapper} apps`}>
         <a href={appStoreLink} className={`${classItem} apps__link`} target="_blank" rel="nofollow"></a>
         <a href={googlePlayLink} className={`${classItem} apps__link`} target="_blank" rel="nofollow"></a>
      </div>
   );
}

export default MobileAppLinks;