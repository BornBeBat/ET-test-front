import { RegistrationForm } from '../../components';

import s from './EventRegistration.module.css';

const EventRegistration = () => {
  return (
    <>
      <h2 className={s.title}>Event registration</h2>
      <RegistrationForm />
    </>
  );
};

export default EventRegistration;
