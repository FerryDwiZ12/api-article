import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { AuthGuard } from '../auth/auth/auth.guard';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: User) {
    return this.prismaService.user.create({ data: user });
  }

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email :  email } });
  }

  async update(id: string, user: User) {
    return this.prismaService.user.update({ where: { id }, data: user });
  }

  async delete(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }
}