import React, { useState } from 'react';
import uuid from 'react-uuid';
import s from './styles.module.scss';
import { useAppSelector, useAppDispatch } from '../../stores/hooks';
import { selectBoxs, addBox, addItemBox } from './boxSlice';
import { IBox } from 'models/Box';
import AppBox from 'components/AppBox';

const Box = () => {
  const [text, setText] = useState<string>('');
  const [type, setType] = useState<string>('');
  const boxs = useAppSelector(selectBoxs);
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setType('');
    setText('');
  };

  const handleChange = (value: string) => {
    if (value === 'add_box') {
      dispatch(
        addBox({
          id: uuid(),
          name: text,
          list: [],
        })
      );
    } else {
      dispatch(
        addItemBox({
          idBox: value,
          item: {
            id: uuid(),
            name: text,
            date: new Date(),
          },
        })
      );
    }
    resetForm();
  };
  return (
    <div className={s.wrap}>
      <h4>Create new box</h4>
      <div className={s.action}>
        <input
          type="text"
          onChange={(e) => setText(e?.target.value)}
          value={text}
          placeholder="Please input..."
        />
        <select
          value={type}
          name="add_item"
          id="add"
          onChange={(e) => handleChange(e.target.value)}
        >
          <option></option>
          <option value="add_box">Add box</option>
          {boxs?.map((box: IBox, i: number) => (
            <option value={box.id} key={i}>
              Add box {`${box.name}`}
            </option>
          ))}
        </select>
      </div>
      <div className={s.list}>
        {boxs?.map((box: IBox, i: number) => (
          <AppBox content={box} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Box;
