// import { intro } from "@clack/prompts";
import yargsParser from 'yargs-parser';
import { push, pull } from './commands';

async function main() {
  const argv = yargsParser(process.argv.slice(2));

  // 显示介绍信息
  // await intro();

  // 根据命令执行相应操作
  if (argv._.includes('push')) {
    const filePathIndex = argv._.indexOf('push') + 1;
    const filePath = argv._[filePathIndex];

    await push(filePath);
  } else if (argv._.includes('pull')) {
    const idIndex = argv._.indexOf('pull') + 1;
    const id = argv._[idIndex];
    // 同上，使用 @clack/prompts 获取更多信息
    await pull(id);
  } else {
    console.log("Unknown command. Available commands are 'push' and 'pull'.");
  }
}

main().catch(console.error);
