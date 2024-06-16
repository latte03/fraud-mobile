/**
 * type example
 * @description: 用户信息
 */

export interface UserInfo {
  postGroup: string
  user: User
  roleGroup: string
}

export interface User {
  createBy: string
  createTime: Date
  updateBy: null
  updateTime: null
  userId: string
  deptId: number
  userName: string
  nickName: string
  userType: string
  email: string
  phonenumber: string
  sex: string
  avatar: string
  status: string
  delFlag: string
  loginIp: string
  loginDate: Date
  remark: null
  dept: Dept
  roles: Role[]
  roleIds: null
  postIds: null
  roleId: null
  unicomAppkey: null
  unicomSecrectkey: null
  admin: boolean
}

export interface Dept {
  createBy: null
  createTime: null
  updateBy: null
  updateTime: null
  parentName: null
  parentId: number
  children: any[]
  deptId: number
  deptName: string
  orderNum: number
  leader: null
  phone: null
  email: null
  status: string
  delFlag: null
  ancestors: string
}

export interface Role {
  createBy: null
  createTime: null
  updateBy: null
  updateTime: null
  roleId: string
  roleName: string
  roleKey: string
  roleSort: number
  dataScope: string
  menuCheckStrictly: null
  deptCheckStrictly: null
  status: string
  delFlag: null
  remark: null
  flag: boolean
  menuIds: null
  deptIds: null
  admin: boolean
}

export interface EchoMap {}
