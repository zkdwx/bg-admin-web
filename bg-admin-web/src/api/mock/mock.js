const Mock = require('mockjs')

import userLogin from './login/user.login.json';

Mock.mock('/user/login', 'post', userLogin);
