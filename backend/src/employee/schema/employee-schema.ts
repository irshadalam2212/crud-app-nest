import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

/*
  Employee Schema
  Represents the structure of the Employee document in the database.
 
  Fields:
  - name: The name of the employee. It is a required string field.
  - role: The role of the employee within the organization. This is required string field.
  - experience: The number of years of experience the employee has. This is a required number field.
 */
@Schema({ collection: 'Employee' })
export class Employee {
  @Prop()
  name: string;

  @Prop()
  role: string;

  @Prop()
  experience: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
