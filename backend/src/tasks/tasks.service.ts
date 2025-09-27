import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];

  create(projectId: string, dto: CreateTaskDto) {
    const task = { id: Date.now().toString(), projectId, ...dto };
    this.tasks.push(task);
    return task;
  }

  findByProject(projectId: string) {
    return this.tasks.filter(t => t.projectId === projectId);
  }

  update(id: string, dto: UpdateTaskDto) {
    const task = this.tasks.find(t => t.id === id);
    if (task) Object.assign(task, dto);
    return task;
  }

  remove(id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return { message: 'Task deleted' };
  }
}
