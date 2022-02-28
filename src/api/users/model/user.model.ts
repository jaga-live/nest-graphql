import { Prop, Schema } from "@nestjs/mongoose";


@Schema()
export class User extends Document{

    @Prop()
    name: string

    @Prop()
    email: string

}