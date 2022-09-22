import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBox } from 'models/common';
import * as _ from 'lodash';
import { RootState, AppThunk } from '../../stores/store';

export interface BoxState {
  boxs: IBox[];
}

const initialState: BoxState = {
  boxs: [],
};

export const boxSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addBox: (state, action: PayloadAction<any>) => {
      state.boxs = [...state.boxs, ...[action.payload]];
    },

    removeBox: (state, action: PayloadAction<any>) => {
      state.boxs = _.reject(state.boxs, (box) => {
        return box.id === action.payload;
      });
    },

    addItemBox: (state, action: PayloadAction<any>) => {
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

    removeItem: (state, action: PayloadAction<any>) => {
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
