import React from 'react';
import classes from './test.module.scss';

const test = () => {
  return (
    <div className={classes['test-class']}>
      This is a component from a tsx file..
    </div>
  );
};

export default test;
