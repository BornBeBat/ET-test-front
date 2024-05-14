import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../../myRedux/eventsSlise/operations';

const EventsBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return <div>Event board</div>;
};

export default EventsBoard;
