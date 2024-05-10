import { Controller, Post ,Get, Body, BadRequestException, Res, UseGuards,HttpCode, HttpStatus, HttpException, Req} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request,Response } from 'express';
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){
    }
    // localhost:3000/auth/login
    @Post('login')
    async Login(
        @Body('account') account: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ){
        return await this.authService.Login(account, password,response)
    }

    @Get('details')
    async details(@Req() request:Request){
        // console.log(request.cookies)
        return await this.authService.GetbyJWT(request.cookies)
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response){
        response.clearCookie('jwt')
        return{message:"success"}
    }
  
}


