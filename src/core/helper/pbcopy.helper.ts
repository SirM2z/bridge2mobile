/**
 * Cors helper.
 * @file cors options 配置 具体参考 https://github.com/expressjs/cors#configuration-options
 * @module core/helper/cors
 * @author Ryan <https://github.com/sirm2z>
 */

import { spawn, ChildProcessWithoutNullStreams } from 'child_process';

export const Pbcopy = (data: string): Promise<string> => {
  return new Promise(function PbcopyExecutor(resolve, reject) {
    const proc: ChildProcessWithoutNullStreams = spawn('pbcopy');
    proc.on('error', function PbcopyExecutorErr(err) {
      reject('copy error');
    });
    proc.on('close', function PbcopyExecutorSuc(err) {
      resolve('copy success');
    });
    proc.stdin.write(data);
    proc.stdin.end();
  });
};
