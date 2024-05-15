import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../myRedux/eventsSlise/operations';
import { EventList, Loader, Sort } from '../../components';
import s from './EventsBoard.module.css';
import { selectEventsIsLoading, selectFirstLoad, updateFirstLoad } from '../../myRedux';

const EventsBoard = () => {
  const dispatch = useDispatch();
  const firstLoad = useSelector(selectFirstLoad);
  const isLoading = useSelector(selectEventsIsLoading);

  useEffect(() => {
    if (firstLoad) return;
    dispatch(fetchEvents());
    dispatch(updateFirstLoad());
  }, [dispatch, firstLoad]);

  return (
    <>
      <h2 className={s.title}>Events</h2>
      <Sort />
      <EventList />
      {isLoading && <Loader />}
    </>
  );
};

export default EventsBoard;
