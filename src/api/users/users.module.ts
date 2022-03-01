import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './model/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'users', schema: UserSchema}])
  ],
  providers: [UserResolver, UsersService]
})
export class UsersModule {}
