import dsq from './dsq'
import user from './user'
import actives from './actives'
import lesson from './lesson'

export default [
  {
    name: "首页",
    path: "/",
    component: resolve => require(['Views/index'], resolve),

  },
  {
    path: "/login", // xzl
    component: resolve => require(['Views/LoginPage/index'], resolve),
  },
	...dsq,
  ...user,
  ...actives
]
