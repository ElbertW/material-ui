import * as React from 'react';
import { StandardProps } from '..';
import { ButtonBaseProps, ButtonBaseClassKey } from '../ButtonBase';

export interface ListItemProps extends StandardProps<
  ButtonBaseProps & React.LiHTMLAttributes<HTMLLIElement>,
  ListItemClassKey
> {
  button?: boolean;
  component?: string | React.ComponentType<ListItemProps>;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
}

export type ListItemClassKey =
  | ButtonBaseClassKey
  | 'container'
  | 'keyboardFocused'
  | 'default'
  | 'dense'
  | 'divider'
  | 'gutters'
  | 'button'
  | 'secondaryAction'
  ;

declare const ListItem: React.ComponentType<ListItemProps>;

export default ListItem;
