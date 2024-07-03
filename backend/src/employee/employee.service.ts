import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from './schema/employee-schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  //Read operation
  async getAll() {
    return await this.employeeModel.find().exec();
  }

  //create operation
  async create(employee: Employee) {
    const newEmployee = new this.employeeModel(employee);
    await newEmployee.save();
  }

  //update operation
  async getById(id: string) {
    return await this.employeeModel.findById(id).exec();
  }

  async update(id: string, employee: Employee) {
    return await this.employeeModel.findByIdAndUpdate(id, employee, {
      new: true,
    });
  }

  //delete operation
  async delete(id:string){
    await this.employeeModel.findByIdAndDelete(id)
  }
}
