import { useSelector } from 'react-redux';
import { EventListItem } from '../EventListItem/EventListItem';
import { selectEvents } from '../../myRedux';

import s from './EventList.module.css';

export const EventList = () => {
  const events = useSelector(selectEvents);
  console.log(events);
  return (
    <ul className={s.list}>
      {events.map(el => (
        <EventListItem key={el._id} data={el} />
      ))}
    </ul>
  );
};
