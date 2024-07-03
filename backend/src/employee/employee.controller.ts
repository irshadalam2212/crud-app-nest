import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './schema/employee-schema';

/*
  Employee Controller
  Handles HTTP requests related to employee operations.
 */

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  // Endpoints

  // GET /employee: Retrieves all employees.
  @Get()
  async getAll() {
    return await this.employeeService.getAll();
  }

  // POST /employee: Creates a new employee.
  @Post()
  async create(@Body() employee: Employee) {
    return await this.employeeService.create(employee);
  }

  // GET /employee/:id: Retrieves an employee by their ID
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.employeeService.getById(id);
  }

  // PUT /employee/:id: Updates an existing employee by their ID.
  @Put('/:id')
  async update(@Param('id') id: string, @Body() employee: Employee) {
    return await this.employeeService.update(id, employee);
  }

  // DELETE /employee/:id: Deletes an employee by their ID.
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.employeeService.delete(id);
  }
}
