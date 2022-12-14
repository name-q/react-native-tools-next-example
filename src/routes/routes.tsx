/* eslint-disable prettier/prettier */

import Home from '../pages/home/index/index';
import User from '../pages/user/index/index';
import WaitRemove from '../pages/test/useWaitRemove';
import Msg from '../pages/test/msg';


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
  {
    name: '/test/useWaitRemove',
    component: WaitRemove,
  },
  {
    name: '/test/msg',
    component: Msg,
  },
];

export {pages};
