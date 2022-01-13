import { action } from 'typesafe-actions';

import type {
  FontSizeDecrementProps,
  FontSizeIncrementProps,
  FontSizeRestoreProps,
} from './types';
import { FontTypes } from './types';

export const decrementFontSizeAction = (): FontSizeDecrementProps =>
  action(FontTypes.FONT_SIZE_DECREMENT);

export const restoreFontSizeAction = (): FontSizeRestoreProps =>
  action(FontTypes.FONT_SIZE_RESTORE);

export const incrementFontSizeAction = (): FontSizeIncrementProps =>
  action(FontTypes.FONT_SIZE_INCREMENT);
