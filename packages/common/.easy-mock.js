module.exports = {
  // easy-mock 服务器
  host: 'http://easy-mock.gm',
  // 生成文件输入目录
  output: 'src/api',
  // 生成代码使用的模板
  template: 'gmsoft-happyCoding/axios-ts',
  projects: [
    {
      // easy-mock project id http://easy-mock.gm/project/5c514bf9cd2f550e9dfbb515
      id: '5c514bf9cd2f550e9dfbb515',
      name: 'whatToEat',
      // urlPreprocessor: url => url.replace('/demo-gateway', ''),
      // 如果baseUrl为字符串请使用 "'baseUrl'"
      baseUrl: "process.env['gateway.demo']",
    },
  ],
};
