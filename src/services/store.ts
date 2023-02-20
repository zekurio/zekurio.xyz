import create from 'zustand';
import { AppTheme } from '../theme/theme';
import LocalStorageUtil from '../util/localstorage';

export type FetchLocked<T> = {
  value: T | undefined;
  isFetching: boolean;
};

export interface Store {
  theme: AppTheme;
  setTheme: (v: AppTheme) => void;
}

export const useStore = create<Store>((set, get) => ({
  theme: LocalStorageUtil.get(
    'shnp.theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? AppTheme.DARK : AppTheme.LIGHT,
  )!,
  setTheme: (theme) => {
    set({ theme });
    LocalStorageUtil.set('shnp.theme', theme);
  },
}));