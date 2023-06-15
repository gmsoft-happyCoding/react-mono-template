/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2023-03-15 17:48:06
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2023-03-17 15:03:37
 * @FilePath: \execute-manage\packages\app\project-config\plugins\plugin-dev.js
 * @Description:
 *
 * Copyright (c) 2023 by Gmsoft - WeiHong Ran, All Rights Reserved.
 */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-param-reassign */

const { isNil, pick } = require('lodash');

/**
 * if you want dynamic change envs you can use it
 */
module.exports = async context => {
  const { inquirer, produce, pluginOption } = context;
  const isDev = process.env.NODE_ENV !== 'production';
  const questions = [
    {
      type: 'list',
      name: 'REACT_APP_PROXY_PLATFORM',
      message: '请选择开发代理平台:',
      choices: [
        { name: 'dev1', value: 'dev1' },
        { name: 'test2-jydn', value: 'test2-jydn' },
        { name: 'test1', value: 'test1' },
        { name: 'test1-xcj', value: 'test1-xcj' },
        { name: 'test1-ylam', value: 'test1-ylam' },
        { name: 'test2', value: 'test2' },
        { name: 'show', value: 'show' },
        { name: 'mock', value: 'mock' },
      ],
      default: 'dev1',
    },
  ];

  if (isDev) {
    const realQuestion = questions.filter(q => isNil(process.env[q.name]));
    const realENVKeys = realQuestion.map(q => q.name);

    const answers = await inquirer
      .prompt(realQuestion)
      .then(_answers => ({ ...pluginOption, ..._answers }));
    return produce(context, draft => {
      draft.config.envs = {
        ...draft.config.envs,
        ...pick(answers, realENVKeys),
      };
    });
  }
  return context;
};
