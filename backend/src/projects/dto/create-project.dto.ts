export class CreateProjectDto {
  title: string;
  description: string;
  status: 'active' | 'completed';
}
