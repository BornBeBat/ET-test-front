import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../../myRedux/eventsSlise/operations';
import { EventList } from '../../components';
import s from './EventsBoard.module.css';

const EventsBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <>
      <h2 className={s.title}>Events</h2>
      <EventList />
    </>
  );
};

export default EventsBoard;
