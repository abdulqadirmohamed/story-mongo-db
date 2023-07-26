import mongoose, {Schema, mongo} from "mongoose";

const storySchema = new Schema(
    {
        title: String,
        description: String,
        tag: String
    },
    {
        timestamps: true
    }
)


const Story = mongoose.models.Story || mongoose.model("Story", storySchema)

export default Story