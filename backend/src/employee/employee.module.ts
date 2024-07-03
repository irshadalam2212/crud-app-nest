import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './schema/employee-schema';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

/*
  Employee Module
  Defines the Employee module that imports necessary components and sets up
  the Employee schema, service, and controller.
  
  Imports:
  - MongooseModule.forFeature: Registers the Employee schema with Mongoose,
    specifying the collection name as 'Employee'.
  
  Providers:
  - EmployeeService: The service responsible for handling business logic related
    to employees.
  
  Controllers:
  - EmployeeController: The controller that handles incoming HTTP requests
    related to employees and delegates tasks to the EmployeeService.
 */

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Employee',
        schema: EmployeeSchema,
        collection: 'Employee',
      },
    ]),
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
