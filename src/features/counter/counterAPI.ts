import { ResponseBase } from 'utils/api/api.types';
import ApiUtils from 'utils/api/api.utils';

const apiName = {
  fetchCount: '/test',
};

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const fetchCountEffect = (formData: any): Promise<any> =>
  ApiUtils.post<any, ResponseBase<any>>(apiName.fetchCount, formData);
