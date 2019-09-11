import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(id: number) {
    const user: JwtPayload = { userId: id };
    const accessToken = this.jwtService.sign(user);
    return accessToken;
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return payload;
  }
}
