// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

/* 상태관리로
토큰 있을 때 -> 로
*/

const pages = {
  id: 'pages',
  title: '로그인/회원가입',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: '내 정보',
      type: 'collapse', 
      icon: icons.IconKey,
      children: [
        {
          id: 'login3',
          title: '로그인',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: '회원가입',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'detail',
          title: '상세정보',
          type: 'item',
          url: '/pages/register/detail3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
