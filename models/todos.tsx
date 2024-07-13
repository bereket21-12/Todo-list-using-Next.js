import { model, models, Schema } from "mongoose";

const TodoSchema = new Schema({
  creator: { // Change from creater to creator
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true, // Make this required if necessary
  },
  name: {
    type: String,
    required: [true, "Task name is required"],
  },
  time: { // Change to String if you only need time
    type: String,
    required: [true, "Task time is required"],
  },
  date: {
    type: Date,
    required: [true, "Task date is required"],
  },
  status: {
    type: String,
    default: "PENDING", // Set a default status
  },
});

const Todo = models.Todo || model('Todo', TodoSchema);

export default Todo;
