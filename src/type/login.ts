/* 
  type 文件夹用于定义数据类型
*/

// 定义 ruleForm 的类型接口
export interface LoginForm {
  username: string,
  password: string
}

export class loginData {
  ruleForm: LoginForm = {
    username: '',
    password: ''
  }
}