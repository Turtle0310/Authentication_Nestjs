import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserSchema,User } from "../schemas/auth.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";



@Module({
    imports: [
      MongooseModule.forFeature([{
      name: 'User',schema: UserSchema
      }]),
      JwtModule.register({
        secret: 'secret',
        signOptions: {expiresIn: 60}
    })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule{
    
}

