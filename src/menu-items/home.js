// assets
import { IconBurger } from '@tabler/icons-react';

// constant
const icons = { IconBurger };

// ==============================|| HOME MENU ITEMS a||============================== //

const home = {
  id: 'home',
  title: 'Home',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.IconBurger,
      breadcrumbs: false
    }
  ]
};

export default home;
