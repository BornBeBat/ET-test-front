import { NavLink } from 'react-router-dom';
import s from './EventListItem.module.css';
import { forwardRef } from 'react';
export const EventListItem = forwardRef(function EventListItem(props, ref) {
  const { title, description, _id } = props.data;
  return (
    <li className={s.box} ref={ref}>
      <div>
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>{description}</p>
      </div>

      <div className={s.linkWrapper}>
        <NavLink to={`/registration/${_id}`}>Register</NavLink>
        <NavLink to={`/participants/${_id}`}>View</NavLink>
      </div>
    </li>
  );
});
