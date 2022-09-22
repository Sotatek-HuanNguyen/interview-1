import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBox, IReqAddItem, IReqRemoveItem } from 'models/Box';
import * as _ from 'lodash';
import { RootState } from '../../stores/store';

export interface BoxState {
  boxs: IBox[];
}

const initialState: BoxState = {
  boxs: [],
};

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    addBox: (state, action: PayloadAction<IBox>) => {
      state.boxs = [...state.boxs, ...[action.payload]];
    },

    removeBox: (state, action: PayloadAction<string>) => {
      state.boxs = _.reject(state.boxs, (box) => {
        return box.id === action.payload;
      });
    },

    addItemBox: (state, action: PayloadAction<IReqAddItem>) => {
      let box_index = state.boxs.findIndex((box) => {
        return box.id === action.payload.idBox;
      });
      let box_update = _.cloneDeep(state.boxs[box_index]);
      box_update = {
        ...box_update,
        list: _.sortBy([...box_update.list, ...[action.payload.item]], function (dateObj) {
          return new Date(dateObj.date);
        }),
      };

      state.boxs = _.map(state.boxs, (box) => {
        return box.id === box_update.id ? box_update : box;
      });
    },

    removeItem: (state, action: PayloadAction<IReqRemoveItem>) => {
      let box_index = state.boxs.findIndex((box) => {
        return box.id === action.payload.boxId;
      });
      let box_update = _.cloneDeep(state.boxs[box_index]);
      box_update = {
        ...box_update,
        list: _.reject(box_update?.list, (item) => {
          return item.id === action.payload.id;
        }),
      };
      state.boxs = _.map(state.boxs, (box) => {
        return box.id === box_update.id ? box_update : box;
      });
    },
  },
});

export const { addBox, removeBox, addItemBox, removeItem } = boxSlice.actions;

export const selectBoxs = (state: RootState) => state.boxReducer.boxs;

export default boxSlice.reducer;
