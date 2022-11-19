import Post from "../Models/Post.js";
import fileService from "./fileService.js";

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture)
        const createdPost = await Post.create({...post, picture: fileName})
        return createdPost
    }

    async getAll() {
        const posts = await Post.find()
        return posts
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id is undefined')
        }

        const post = await Post.findById(id)
        return post
    }

    async update(id, post) {
        const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true})
        return updatedPost
    }

    async delete(id) {
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}

export default new PostService()