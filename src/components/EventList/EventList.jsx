import { createRef, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EventListItem } from '../EventListItem/EventListItem';
import { fetchEvents, selectError, selectEvents, selectFilter, selectPage } from '../../myRedux';

import s from './EventList.module.css';

export const EventList = () => {
  const events = useSelector(selectEvents);
  const observerLoader = useRef();
  const loadedPage = useRef(null);
  const lastItem = createRef();
  const page = useSelector(selectPage);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const actionInSight = entries => {
      if (error || loadedPage.current === page) return;
      if (entries[0].isIntersecting) {
        dispatch(fetchEvents({ page, ...filter }));
        loadedPage.current = page;
      }
    };
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }

    observerLoader.current = new IntersectionObserver(actionInSight, {
      threshold: 1,
      rootMargin: '50px',
    });
    if (lastItem.current) {
      observerLoader.current.observe(lastItem.current);
    }
  }, [lastItem, page, dispatch, error, filter]);

  return (
    <ul className={s.list}>
      {events.map((el, id) => {
        if (id + 1 === events.length) {
          return <EventListItem key={el._id} data={el} ref={lastItem} />;
        }
        return <EventListItem key={el._id} data={el} />;
      })}
    </ul>
  );
};
