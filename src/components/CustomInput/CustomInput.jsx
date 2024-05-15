import s from './CustomInput.module.css';

export const CustomInput = ({ type, name, register, title, errors }) => {
  return (
    <label className={s.wrapper}>
      <p className={s.title}>{title}</p>
      <input className={s.input} type={type} {...register(name)} />
      {errors?.message && <p className={s.error}>{errors?.message}</p>}
    </label>
  );
};
