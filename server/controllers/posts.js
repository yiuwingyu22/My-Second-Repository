import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    // res.send('THIS WORKS!');
    try {
        // .find() inside of a model -> async func -> need time to find -> await
        const postMessage = await PostMessage.find();

        console.log(postMessage);

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// 
export const createPost = async (req, res) => {
    // res.send('Post Creation');
    const post = req.body

    const newPost = new newPostMessage(post);

    try {
        // .save() inside of a model -> async func -> need time to find -> await
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};