import { useSelector } from 'react-redux';
import { selectParticipants } from '../../myRedux';
import { ParticipantItem } from '../ParticipantItem/ParticipantItem';

import s from './ParticipantList.module.css';

export const ParticipantList = () => {
  const participants = useSelector(selectParticipants);
  return (
    <ul className={s.wrapper}>
      {participants.map(el => (
        <ParticipantItem key={el._id} data={el} />
      ))}
    </ul>
  );
};
