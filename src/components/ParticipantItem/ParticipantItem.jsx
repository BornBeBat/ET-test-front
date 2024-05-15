import s from './ParticipantItem.module.css';
export const ParticipantItem = ({ data }) => {
  const { name, email } = data;
  return (
    <li className={s.item}>
      <h3>{name}</h3>
      <p>{email}</p>
    </li>
  );
};
