import { text, log } from '@clack/prompts';
import { writeFile } from '../utils/file-operations';

export async function pull(id: string) {
  try {
    // 使用 Node.js 原生的 fetch API
    const response = await fetch(`https://riff-api.seemusic.xyz/riffs/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const body = await response.json() as any;

    // 询问用户要保存的文件名
    const fileName = await text({
      message: '请输入要保存的文件名',
      defaultValue: body.name,
      initialValue: body.name,
      placeholder: body.name,
    });

    try {
      await writeFile(fileName as string, body.content);
      log.success(`${fileName as string} created successfully.`);
    } catch (error) {
      if (error instanceof Error) {
        log.error(error.message);
        return;
      } else {
        console.error(error);
      }
    }
  } catch (error) {
    console.error('未知错误:', error);
  }
}
