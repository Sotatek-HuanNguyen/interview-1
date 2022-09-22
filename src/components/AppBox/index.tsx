import { IBox, IItemList } from 'models/common';
import React from 'react';
import s from './styles.module.scss';
import { selectBoxs, removeBox } from 'features/Box/boxSlice';
import { useAppDispatch, useAppSelector } from 'stores/hooks';
import AppItem from 'components/AppItem';

interface IProps {
  content: IBox;
}

const AppBox = (props: IProps) => {
  const { content } = props;
  const dispatch = useAppDispatch();
  return (
    <div className={s.box}>
      <div className={s.flex}>
        <div className={s.title}>{content.name}</div>
        <button onClick={() => dispatch(removeBox(content.id))}>Delete</button>
      </div>
      {content?.list?.map((item: IItemList, i: number) => (
        <AppItem boxId={content?.id} content={item} key={i} />
      ))}
    </div>
  );
};

export default AppBox;
