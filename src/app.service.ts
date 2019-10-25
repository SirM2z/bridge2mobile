import { Injectable } from '@nestjs/common';
import { Pbcopy } from './core/helper/pbcopy.helper';
import { write, read } from 'clipboardy';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async copy(str: string): Promise<object> {
    try {
      await write(str);
      return Promise.resolve({
        info: 'copy success',
      });
    } catch (error) {
      return Promise.resolve({
        info: 'copy success',
      });
    }
  }

  async getCopy(): Promise<object> {
    try {
      const info = await read();
      return Promise.resolve({
        info,
      });
    } catch (error) {
      return Promise.resolve({
        info: 'error: clipboardy read',
      });
    }
  }
}
