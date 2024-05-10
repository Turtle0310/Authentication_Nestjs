import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './Users/auth/auth.module';
// import { UserController } from './user/user.controller';



//MongooseModule.forRoot('mongodb+srv://huyhuy:HurfnSTQcWUuXXMF@turtle.nywzo31.mongodb.net/Node-API?retryWrites=true&w=majority&appName=turtle')

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://huyhuy:HurfnSTQcWUuXXMF@turtle.nywzo31.mongodb.net/Node-API?retryWrites=true&w=majority&appName=turtle'),
  ],
  // controllers: [UserController]
})
export class AppModule {}
