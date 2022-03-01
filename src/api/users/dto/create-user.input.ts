import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @Field({nullable: true})
  name: string;

  @Field(() => String)
  email: string

}
