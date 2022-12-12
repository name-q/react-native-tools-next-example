/* eslint-disable prettier/prettier */

import Home from '../pages/home/index/index';
import User from '../pages/user/index/index';


type Route = {
  name: string;
  component: any;
  key?: number;
};

let pages: Route[] = [
  {
    name: '/home/index',
    component: Home,
  },
  {
    name: '/user/index',
    component: User,
  },
];

export {pages};
