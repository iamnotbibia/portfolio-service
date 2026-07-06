import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ConnectionName,
  DatabaseModule,
} from 'src/database/database.module';
import {
  PortfolioDocument,
  PortfolioSchema,
} from 'src/database/schemas/portfolio/portfolio.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature(
      [
        {
          name: PortfolioDocument.name,
          schema: PortfolioSchema,
        },
      ],
      ConnectionName.database,
    ),
  ],
  providers: [ProjectsResolver, ProjectsService],
})
export class ProjectsModule {}
