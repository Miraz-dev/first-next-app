import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, {timestamps: true}
)

// When a new user is created, the timestamp will create the "CreatedAt" and "updatedAt"

//If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);