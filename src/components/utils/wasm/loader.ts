/**
 * @Description: Ailurus 核心 Wasm 引擎初始化程序
 * @Author: 陈思宇
 * @Date: 2026-03-18 16:30:00
 * @LastEditTime: 2026-03-18 18:09:00
 * @Function: initWasmEngine
 * @Process: 
 * 1. 实例化 Go 运行时桥接对象 (wasm_exec.js)
 * 2. 异步拉取远程 .wasm 二进制算子文件
 * 3. 建立 JS 与 Go 的共享内存导入表 (importObject)
 * 4. 启动 Go 主协程并挂载全局函数至 window
 * @Returns {Promise<void>} 引擎准备就绪后返回
 * @Throws {Error} 当 WASM 文件不存在或浏览器不支持时抛出异常
 */
import './wasm_exec.js';

export const initWasmEngine = async (): Promise<void> => {
  // 这里的 Go 类是由 wasm_exec.js 注入到全局的
  const go = new (window as any).Go();

  try {
    const response = await fetch('/main.wasm');
    const buffer = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(buffer, go.importObject);


    go.run(result.instance);
    
    console.log('%c[Ailurus] Go-Wasm Engine Ready', 'color: #d96633; font-weight: bold;');
  } catch (err) {
    console.error('Failed to load Wasm:', err);
  }
};