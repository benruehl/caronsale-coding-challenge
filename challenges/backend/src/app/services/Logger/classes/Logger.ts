import { injectable } from 'inversify';
import 'reflect-metadata';

import { ILogger } from '../interface/ILogger';

@injectable()
export class Logger implements ILogger {
  public constructor() {}

  public log(message: string, ...args): void {
    console.log(`[LOG]: ${message}`, ...args);
  }
}
