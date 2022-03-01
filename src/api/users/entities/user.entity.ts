import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{

  @Field(() => String)
  _id: string

  @Field()
  name: string

  @Field()
  email: string

}