import { useEffect } from 'react';
import { sort } from '../../../constant/sort';
import s from './SortPopUp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, selectFilter, updateFilter } from '../../../myRedux';

export const SortPopUp = ({ setIsOpenPopUp, boxRef }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  useEffect(() => {
    const handleCloseList = e => {
      console.log(e.target.closest('div'));
      if (e.target.closest('div') !== boxRef.current) {
        setIsOpenPopUp(false);
      }
    };
    document.addEventListener('click', handleCloseList);
    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  }, [boxRef, setIsOpenPopUp]);

  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        setIsOpenPopUp(false);
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [setIsOpenPopUp]);

  const handleClick = async data => {
    if (JSON.stringify(filter) === JSON.stringify(data)) return;
    await dispatch(updateFilter(data));

    dispatch(fetchEvents({ page: 1, ...data }));
    setIsOpenPopUp(false);
  };
  return (
    <ul className={s.wrapper}>
      {sort.map((el, id) => (
        <li key={id}>
          <button
            className={s.button}
            onClick={() => handleClick(el.value)}
            type="button"
            disabled={el.value === filter}
          >
            {el.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
