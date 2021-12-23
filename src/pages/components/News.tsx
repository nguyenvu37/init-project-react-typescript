/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'components/Button';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { Creators as newsCreators } from '../redux/newsReducer';
import { AnyAction } from 'redux';

export const News = () => {
  const props = useAppSelector((state) => state.newsReducer);
  const increment: (payload: number) => AnyAction = newsCreators.increment;
  const descrement: (payload: number) => AnyAction = newsCreators.descrement;
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(increment(1));
  };
  const handleDescrement = () => {
    dispatch(descrement(1));
  };
  return (
    <div className="news">
      <br />
      <h3>Count: {props.count}</h3>
      <div className="btn">
        <Button handleClick={handleIncrement} text="Increment" />
        <Button handleClick={handleDescrement} text="Descrement" />
      </div>
    </div>
  );
};
