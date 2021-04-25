import mongoose, { Model, Schema } from "mongoose";
import user from "./user";

const schemas: Map<String, Schema> = new Map<String, Schema>();

schemas.set('User', new mongoose.Schema(user));

export default schemas;