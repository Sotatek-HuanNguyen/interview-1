import { ITokenInfo } from 'models/common';
import localStorageHelper, { KeyStorage } from 'utils/localStorage';

export const getTokenInfo = async () => {
  try {
    const tokenInfo: ITokenInfo = localStorageHelper.getObject(KeyStorage.X_TOKEN, null);
    if (tokenInfo && tokenInfo?.accessToken) {
      return tokenInfo as ITokenInfo;
    }
  } catch (error) {
    setTokenInfo(null);
    return null;
  }
};

export const setTokenInfo = (tokenInfo: ITokenInfo | null) => {
  localStorageHelper.setObject(KeyStorage.X_TOKEN, {
    ...tokenInfo,
    expiresAt: Date.now() + Number(tokenInfo?.expiresAt) * 1000,
  });
};
