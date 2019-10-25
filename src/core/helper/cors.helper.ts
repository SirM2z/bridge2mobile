/**
 * Cors helper.
 * @file cors options 配置 具体参考 https://github.com/expressjs/cors#configuration-options
 * @module core/helper/cors
 * @author Ryan <https://github.com/sirm2z>
 */

import { HttpStatus } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsOptions: CorsOptions = {
  origin: '*',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: HttpStatus.NO_CONTENT,
};
