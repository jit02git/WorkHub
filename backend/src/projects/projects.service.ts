import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  private projects: any[] = [];


  create(dto: CreateProjectDto) {
    const project = { id: Date.now().toString(), ...dto };
    this.projects.push(project);
    return project;
  }

  findAll() {
    return this.projects;
  }

  findOne(id: string) {
    return this.projects.find(p => p.id === id);
  }

  update(id: string, dto: UpdateProjectDto) {
    const project = this.findOne(id);
    if (project) Object.assign(project, dto);
    return project;
  }

  remove(id: string) {
    this.projects = this.projects.filter(p => p.id !== id);
    return { message: 'Project deleted' };
  }
}
