import { Injectable } from '@nestjs/common';
import {User, UserDocument} from './product.models'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}

  //create user
  async createUser(user: User): Promise<User>{
    const newUser = new this.userModel(user)
    return newUser.save()
  }

  //read user
  async readUser(){
    return this.userModel.find({})
    .then((user)=>{return user})
    .catch((err)=>console.log(err))
  }

  //update user
  async updateUser(id,data):Promise<User>{
    return this.userModel.findByIdAndUpdate(id,data,{new:true})
  }

  //delete user
  async deleteUser(id){
    return this.userModel.findByIdAndDelete(id)
  }
}
