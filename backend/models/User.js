const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create user Schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", UserSchema);

// Short form:
// module.eports = User = model("User", UserSchema);
