import { SchemaDefinition } from "mongoose";

export default {
  name: {
    type: String,
    require: true,
    maxlength: 50
  },
  firstName: {
    type: String,
    maxlength: 50
  },
  lastName: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    require: true,
    maxlength: 50,
    unique: true,
    validate: {
      validator: (value: string) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
    }
  }
} as SchemaDefinition;