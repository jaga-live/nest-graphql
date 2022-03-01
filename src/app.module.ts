import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { UsersModule } from './api/users/users.module';
import { ENV } from './core/env';

@Module({
  imports: [
    MongooseModule.forRoot(ENV.MONGO_DEV),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: ENV.NODE_ENV === 'dev' ? true : false,
      
    }),

    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
