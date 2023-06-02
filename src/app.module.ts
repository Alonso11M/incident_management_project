import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentGroupModule } from './assignment-group/assignment-group.module';
import { UsersModule } from './users/users.module';
import { IncidentsModule } from './incidents/incidents.module';
import { CategoriesModule } from './categories/categories.module';
import { Subcategories1Module } from './subcategories1/subcategories1.module';
import { Subcategories2Module } from './subcategories2/subcategories2.module';
import { Subcategories3Module } from './subcategories3/subcategories3.module';
import { Subcategories4Module } from './subcategories4/subcategories4.module';

@Module({
  imports: [AssignmentGroupModule, UsersModule, IncidentsModule, CategoriesModule, Subcategories1Module, Subcategories2Module, Subcategories3Module, Subcategories4Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}