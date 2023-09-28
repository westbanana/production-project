import React  from 'react';
import classes from './style.module.scss';
const Loader = () => {
  return (
    <div className={classes.main}>
      <div className={classes.one}/>
      <div className={classes.two}/>
      <div className={classes.tree}/>
    </div>
  )
};

export default Loader;