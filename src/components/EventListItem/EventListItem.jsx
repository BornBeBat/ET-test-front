import { NavLink } from 'react-router-dom';
import s from './EventListItem.module.css';
export const EventListItem = props => {
  const { title, description, _id } = props.data;
  return (
    <li className={s.box}>
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
};
