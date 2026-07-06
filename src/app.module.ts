import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ProjectsModule } from './graphqls/projects/projects.module';

@Module({
  imports: [
    // common
    CommonModule,
    ProjectsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
