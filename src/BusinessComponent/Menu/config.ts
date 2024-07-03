import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const menuConfig: MenuItem[] = [
  {
    key: 'normal',
    label: '通用',
    children: [
      {
        key: 'button',
        label: '按钮 Button',
      },
    ],
  },
];

export { menuConfig };
