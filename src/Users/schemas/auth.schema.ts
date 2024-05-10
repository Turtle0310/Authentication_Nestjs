import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class User{
    @Prop()
    account: string; required: true;
    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)