import path from 'path';
import { spinner, outro } from '@clack/prompts';
import color from 'picocolors';

import { readFile } from '../utils/file-operations';

const apiUrl = 'https://riff-api.seemusic.xyz/riffs';

export async function push(filePath: string) {
  try {
    const loading = spinner();

    loading.start('正在读取文件...');

    // 读取文件内容
    const fileContent = await readFile(filePath);

    loading.message('文件读取成功，正在上传...');

    // 使用内置的fetch发送到接口
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: path.basename(filePath),
        content: fileContent
      })
    });

    if (!response.ok) {
      loading.stop('上传失败');
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    loading.stop('创建成功');

    const body = await response.json() as any;

    outro(`访问地址：${
      color.underline(
        color.cyan('https://riff.seemusic.xyz/' + body.id)
      )}`
    );
  } catch (error) {
    console.error('发送文件时发生错误:', error);
  }
}
