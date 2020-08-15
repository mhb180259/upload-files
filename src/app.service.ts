import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      data: 'Hello World!'
    };
  }
  uploadFile(): any {
    return {
      code: 0
    }
  }
}
