import { Injectable } from '@nestjs/common';
// 测试 123
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
