import { useSelector } from 'react-redux';
import { selectParticipants, selectParticipantsFilter } from '../../myRedux';
import { ParticipantItem } from '../ParticipantItem/ParticipantItem';

import s from './ParticipantList.module.css';
import { filterParticipants } from '../../tools/filterParticipants';

export const ParticipantList = () => {
  const participants = useSelector(selectParticipants);
  const filter = useSelector(selectParticipantsFilter);
  return (
    <ul className={s.wrapper}>
      {filterParticipants(participants, filter).map(el => (
        <ParticipantItem key={el._id} data={el} />
      ))}
    </ul>
  );
};
