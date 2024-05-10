import { BadRequestException, Injectable, UnauthorizedException,Req } from "@nestjs/common";
import { User } from "../schemas/auth.schema";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { JwtService } from "@nestjs/jwt";
import { response } from "express";

@Injectable({})
export class AuthService{
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
        private jwtService: JwtService,
    ){}
    async Login(account: string, password: string,response:any){
        const user = await this.findbyAcc({account});

            if (!user) {
                throw new BadRequestException('invalid credentials');
            }

            if (!user.password) {   
                throw new BadRequestException('invalid credentials');
            }

            const jwt = await this.jwtService.signAsync({id:user.account});

            response.cookie('jwt', jwt);
            return jwt
    }
    async findbyAcc(condition: any): Promise<User> {
        return this.userModel.findOne(condition);
    }

    async GetbyJWT(cookie: any){        
        try{
            const token = cookie['jwt']
            const data = await this.jwtService.verifyAsync(token);
            console.log(data);
            if(!data){
                throw new UnauthorizedException("Invalid")
            }
            const user = await this.findbyAcc({id:data['account']})
            console.log(user);
            return user
        }catch(e){
            throw new UnauthorizedException("Invalid")
        }
        
    }
}
