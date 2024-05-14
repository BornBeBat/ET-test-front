import { useRef, useState } from 'react';

import { SortPopUp } from './SortPopUp/SortPopUp';
import s from './Sort.module.css';

export const Sort = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const wrapper = useRef();

  const handleOpen = e => {
    if (e.target.closest('ul')) return;
    setIsOpenPopUp(!isOpenPopUp);
  };

  return (
    <div className={s.wrapper}>
      <button type="button" onClick={handleOpen} ref={wrapper}>
        <p>Sort</p>
      </button>
      {isOpenPopUp && <SortPopUp boxRef={wrapper} setIsOpenPopUp={setIsOpenPopUp} />}
    </div>
  );
};
