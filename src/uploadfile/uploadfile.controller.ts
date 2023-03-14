import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { UploadfileService } from './uploadfile.service';

@Controller('uploadfile')
export class UploadfileController {
  constructor(private uploadfileService: UploadfileService) {}

  @Post('uploads')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: './uploads',
    }),
  )
  uploadfiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body: any,
  ) {
    console.log(files);
    console.log(body);
    return true;
  }
}
