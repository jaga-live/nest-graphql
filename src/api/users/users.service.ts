import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Model } from "mongoose"
import { User } from './entities/user.entity';
import { UserInputError } from "apollo-server-express"

@Injectable()
export class UsersService {
  constructor(
        @InjectModel('users') private readonly userModel: Model<User>
  ) { }


////CREATE
  async create(createUserInput: CreateUserInput) {
    var isUserRegistered = await this.findByEmail(createUserInput.email)
    if (isUserRegistered) return new UserInputError('User Already exists')
    
    await this.userModel.insertMany(createUserInput)
    return {
      ...createUserInput
    };
  }


/////VIEW
  async findAll(): Promise<User[]> {
    var users = await this.userModel.find({})
    return users
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string): Promise<User> {

    var user = await this.userModel.findOne({ email })
    return user

  }


////PATCH
  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }


///DELETE
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
