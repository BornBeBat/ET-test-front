import { useEffect } from 'react';
import s from './ParticipantFilter.module.css';
import { useDispatch } from 'react-redux';
import { updateParticipantFilter } from '../../myRedux';
export const ParticipantFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateParticipantFilter(e.target.value));
  };

  useEffect(() => {
    return () => {
      dispatch(updateParticipantFilter(''));
    };
  });

  return (
    <div className={s.wrapper}>
      <input type="text" onChange={handleChange} placeholder="Search" />
    </div>
  );
};
