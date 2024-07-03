import fs from 'fs/promises';
import path from 'path';

/**
 * 读取文件内容
 * @param filePath 文件路径
 * @param encoding 文件编码 (默认为 'utf-8')
 * @returns 文件内容
 */
export async function readFile(filePath: string, encoding: BufferEncoding = 'utf-8'): Promise<string> {
  try {
    return await fs.readFile(filePath, { encoding });
  } catch (error) {
    throw new Error(`Error reading file ${filePath}: ${error}`);
  }
}

/**
 * 写入文件内容
 * @param filePath 文件路径
 * @param content 要写入的内容
 */
export async function writeFile(filePath: string, content: string): Promise<void> {
  try {
    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, content, 'utf-8');
  } catch (error) {
    throw new Error(`Error writing file ${filePath}: ${error}`);
  }
}

/**
 * 检查文件是否存在
 * @param filePath 文件路径
 * @returns 文件是否存在
 */
export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}