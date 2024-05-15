import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CustomInput } from '../CustomInput/CustomInput';
import s from './RegistrationForm.module.css';
import { hearList } from '../../constant/hearList';
import { registerSchema } from '../../schemas/registerSchema';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerParticipant } from '../../myRedux';

export const RegistrationForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
    shouldUnregister: true,
  });
  const onSubmit = data => {
    data.event = id;
    dispatch(registerParticipant(data))
      .unwrap()
      .then(() => {
        navigate(`/participants/${id}`);
      });
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        title="Full name"
        register={register}
        name="name"
        type="text"
        errors={errors.name}
      />
      <CustomInput
        title="Email"
        register={register}
        name="email"
        type="email"
        errors={errors.email}
      />
      <CustomInput
        title="Date of birth"
        register={register}
        name="birthDate"
        type="date"
        errors={errors.birthDate}
      />
      <fieldset className={s.fieldset}>
        <legend className={s.legend}>Where did you hear about this event?</legend>
        {hearList.map((el, id) => (
          <label key={id} className={s.label}>
            <input {...register('from')} type="radio" value={el} />
            <p className={s.title}>{el}</p>
          </label>
        ))}
        {errors.from?.message && <p className={s.error}>{errors.from?.message}</p>}
      </fieldset>

      <button>Sent</button>
    </form>
  );
};
