import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{

  @Field(type => Int)
  _id: string

  @Field()
  name: string

  email: string

}