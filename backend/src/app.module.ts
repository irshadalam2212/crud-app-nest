import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://irshadalam1414:JZKnGWOLESF1sms9@cluster0.lwclsnp.mongodb.net/employeeData?retryWrites=true&w=majority&appName=Cluster0'
    ),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
