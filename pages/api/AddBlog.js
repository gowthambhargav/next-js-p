import connectDb from "../../middleware/mongoose";
import AddBlog from '../../models/Blog'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { title, slug, description, Bimg, tags, author, comments,  likes } = req.body;
        let Blog = await new AddBlog({ title, slug, description, Bimg, tags, author, comments,  likes } )
        await Blog.save()
        res.status(200).json({ Sucess: true, Blog })
    }
}

export default connectDb(handler)