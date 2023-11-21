#

## Electron

> 导入

`npm install electron --save-dev`

`npm install --save-dev @electron-forge/cli`
`npx electron-forge import`

> 跨进程

1. Electron 的主进程和渲染进程有着清楚的分工并且不可互换
2. 唯一的处理方式就是进程通信（IPC）
3. 使用 Electron 的 ipcMain 模块和 ipcRenderer 模块来进行进程间通信
4. 使用 contextBridge 接口将特权接口暴露给渲染器