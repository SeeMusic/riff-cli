# @kmfe/riff-cli

类似 v0.dev 生成设计稿后通过 'npx v0 add HASH'，把指定的代码文件添加到项目本地的工具。

## 使用

### 发布代码片段
`npx @kmfe/riff push demo.vue` 即可以把当前目录下的 demo.vue 文件发布到远端；并帮你生成一个 ID，你可以通过这个 ID 来下载代码片段。

### 下载代码片段到本地
`npx @kmfe/riff pull id` 即可以从远端获取代码片段，并引导把代码保存到 **当前目录**。

> 如果你使用 pnpm，则可以使用 `pnpm dlx @kmfe/riff` 命令。
