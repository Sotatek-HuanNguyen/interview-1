import { IBox } from 'models/common';
import React, { useState } from 'react';
import s from './styles.module.scss';
import { selectBoxs, addItemBox, removeItem } from 'features/Box/boxSlice';
import { useAppDispatch, useAppSelector } from 'stores/hooks';

interface IProps {
  content: IBox;
  boxId: string;
}

const AppItem = (props: IProps) => {
  const [type, setType] = useState('');
  const { content, boxId } = props;
  const boxs = useAppSelector(selectBoxs);
  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    if (!value) return;
    if (value === 'delete') {
      dispatch(
        removeItem({
          boxId,
          id: content?.id,
        })
      );
    } else {
      // remove in olb box
      dispatch(
        removeItem({
          boxId,
          id: content?.id,
        })
      );
      // add in new box
      dispatch(
        addItemBox({
          idBox: value,
          item: content,
        })
      );
    }
    setType('');
  };

  return (
    <div className={s.box}>
      <div className={s.flex}>
        <div className={s.title}>{content.name}</div>
        <select name="" id="" onChange={(e) => handleChange(e.target.value)} value={type}>
          <option value=""></option>
          <option value="delete">Delete</option>
          {boxs
            .filter((item) => item.id !== boxId)
            .map((box: IBox, i: number) => (
              <option key={i} value={box.id}>
                Move: {`${box.name}`}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default AppItem;
