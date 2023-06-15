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
const path = require('path');
const fs = require('fs');

/**
 * if you want dynamic change envs you can use it
 */
module.exports = async context => {
  const { inquirer, produce, pluginOption } = context;
  const isDev = process.env.NODE_ENV !== 'production';

  // 最后一次启动代理记录读入
  const lastRunFile = path.resolve(__dirname, './lastRun.data');
  let defEnv = 'dev1';
  if (fs.existsSync(lastRunFile)) {
    defEnv = fs.readFileSync(lastRunFile, 'utf8');
  }

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
      default: defEnv,
    },
  ];

  if (isDev) {
    const realQuestion = questions.filter(q => isNil(process.env[q.name]));
    const realENVKeys = realQuestion.map(q => q.name);

    const answers = await inquirer
      .prompt(realQuestion)
      .then(_answers => ({ ...pluginOption, ..._answers }));

    // 最后一次启动代理配置写出
    fs.writeFileSync(
      lastRunFile,
      process.env.REACT_APP_PROXY_PLATFORM || answers.REACT_APP_PROXY_PLATFORM,
      'utf-8'
    );

    return produce(context, draft => {
      draft.config.envs = {
        ...draft.config.envs,
        ...pick(answers, realENVKeys),
      };
    });
  }
  return context;
};
