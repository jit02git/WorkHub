// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private users = []; // replace with MongoDB User model

  async register(dto: any) {
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = { id: Date.now(), email: dto.email, password: hashed };
    this.users.push(user);
    return { message: 'User registered successfully' };
  }

  async login(dto: any) {
    const user = this.users.find(u => u.email === dto.email);
    if (!user) return { message: 'User not found' };

    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) return { message: 'Invalid credentials' };

    const token = jwt.sign({ id: user.id, email: user.email }, 'JWT_SECRET');
    return { token };
  }
}
