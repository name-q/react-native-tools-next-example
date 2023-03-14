import Home from '../pages/home/index/index';
import User from '../pages/user/index/index';
import WaitReturn from '../pages/test/useWaitReturn';
import Permissions from '../pages/test/usePermissions';

import Msg from '../pages/test/msg';
import Debounce from '../pages/test/debounce';
import Throttle from '../pages/test/throttle';

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
    name: '/test/useWaitReturn',
    component: WaitReturn,
  },
  {
    name: '/test/usePermissions',
    component: Permissions,
  },
  {
    name: '/test/msg',
    component: Msg,
  },
  {
    name: '/test/debounce',
    component: Debounce,
  },
  {
    name: '/test/throttle',
    component: Throttle,
  },
];

export {pages};
