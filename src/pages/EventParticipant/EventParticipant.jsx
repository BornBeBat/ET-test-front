import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEventById, selectIsLoadingParticipant, selectTitle } from '../../myRedux';
import { useEffect } from 'react';

import s from './EventParticipant.module.css';
import { ParticipantFilter, ParticipantList } from '../../components';

const EventParticipant = () => {
  const { id } = useParams();
  const title = useSelector(selectTitle);
  const isLoading = useSelector(selectIsLoadingParticipant);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventById(id));
  }, [dispatch, id]);

  return (
    <>
      {!isLoading && (
        <>
          <h2 className={s.title}>&quot;{title}&quot; participants</h2>
          <ParticipantFilter />
          <ParticipantList />
        </>
      )}
    </>
  );
};

export default EventParticipant;
