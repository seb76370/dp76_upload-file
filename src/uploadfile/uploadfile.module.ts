import { Module } from '@nestjs/common';
import { UploadfileService } from './uploadfile.service';
import { UploadfileController } from './uploadfile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesEntity } from './entities/notes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotesEntity])],
  providers: [UploadfileService],
  controllers: [UploadfileController],
  exports: [UploadfileService],
})
export class UploadfileModule {}
