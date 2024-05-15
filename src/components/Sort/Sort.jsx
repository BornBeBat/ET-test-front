import { useRef, useState } from 'react';

import { SortPopUp } from './SortPopUp/SortPopUp';
import s from './Sort.module.css';

export const Sort = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const wrapper = useRef();

  const handleOpen = () => {
    setIsOpenPopUp(!isOpenPopUp);
  };

  return (
    <div className={s.wrapper} ref={wrapper}>
      <button type="button" onClick={handleOpen}>
        Sort
      </button>
      {isOpenPopUp && <SortPopUp boxRef={wrapper} setIsOpenPopUp={setIsOpenPopUp} />}
    </div>
  );
};
