import React from 'react';
import SectionActual from '../SectionActual/SectionActual';
import SectionBlog from '../SectionBlog/SectionBlog';
import SectionChosen from '../SectionChosen/SectionChosen';
import SectionDownload from '../SectionDownload/SectionDownload';
import SectionPublish from '../SectionPublish/SectionPublish';

const HomePage = () => {
   return (
      <>
         <SectionActual />
         <SectionChosen />
         <SectionPublish />
         <SectionBlog />
         <SectionDownload />
      </>
   );
}

export default HomePage;