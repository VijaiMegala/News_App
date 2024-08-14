import React from 'react';
import LoaderStyles from '../styles/loader.module.scss';

const Loader = () => {
  return (
    <div className={LoaderStyles.loader}>
      <div className={LoaderStyles.loaderBar}></div>
    </div>
  );
};

export default Loader;
