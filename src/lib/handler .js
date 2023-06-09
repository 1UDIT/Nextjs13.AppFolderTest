const { connectToDatabase } = require('./dbConn');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            async function getPosts(req,res){
                try {
                    // connect to the database
                    let { db } = await connectToDatabase();
                    // fetch the posts
                    let posts = await db
                        .collection('weeklytreadings')
                        .find({})
                        .sort({ published: -1 })
                        .toArray();
                    // return the posts
                    return res.json({
                        message: JSON.parse(JSON.stringify(posts)),
                        success: true,
                    });
                } catch (error) {
                    // return the error
                    return res.json({
                        message: new Error(error).message,
                        success: false,
                    });
                }
            }
            return getPosts(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}