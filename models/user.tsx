import { model, models, Schema } from "mongoose";

const Userschema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists']
  },
  userName: {
    type: String,
    required: [true, 'UserName is required'],
    
  },
  image: {
    type: String
  }
});

const user = models.user || model('user', Userschema);

export default user;
