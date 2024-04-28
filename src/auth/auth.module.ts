// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from '../auth/auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { jwtConstants } from './auth.constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      global: true,
      signOptions: { expiresIn: '7d' },
    }),
    ConfigModule.forRoot(),
  ],
  providers: [AuthService, PrismaService, UsersService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  }, {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
  controllers: [AuthController],
})
export class AuthModule {}
