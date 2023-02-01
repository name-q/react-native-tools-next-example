import Home from '../pages/home/index/index';
import Qrcode from '../pages/user/qrcode/index';
import WaitReturn from '../pages/test/useWaitReturn';
import Permissions from '../pages/test/usePermissions';

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
    name: 'qrcode',
    component: Qrcode,
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
];

export {pages};
