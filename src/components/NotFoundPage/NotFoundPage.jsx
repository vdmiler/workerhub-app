import React from 'react';

const NotFoundPage = () => {
   return (
      <section className="error-404" id="error-404" style={{ padding: "80px 0" }}>
         <div className="error-404__container _container">
            <div className="error-404__body" style={{ textAlign: "center" }}>
               <h1 className="error-404__title">
                  404
               </h1>
               <h2 className="error-404__subtitle">
                  Not Found
               </h2>
            </div>
         </div>
      </section>
   );
}

export default NotFoundPage;