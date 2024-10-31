import { registerAs } from '@nestjs/config';
import { CONFIG_KEYS } from './config.enum';

export interface IServerConfig {
  port: number;
}

export default registerAs<IServerConfig>(CONFIG_KEYS.SERVER, () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
}));
