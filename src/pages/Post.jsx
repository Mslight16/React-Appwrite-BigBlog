import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import '../App.css'

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (

        <div className="py-10 bg-gray-50 min-h-screen border-2 border-gray-200">


            <Container>
                <div className="w-full flex justify-center  relative border border-gray-200 shadow-md rounded-2xl p-4 bg-white">



                    <img
                        src={appwriteService.getFileView(post.featuredImage)}
                        alt={post.title}
                        className="rounded-2xl object-contain w-full h-auto max-h-125 overflow-hidden"
                    />
                    {isAuthor && (
                        <div className="absolute left-6 top-6 flex gap-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className="mr-0 bg-green-600 hover:bg-green-700 px-5 py-2 text-sm rounded-lg shadow">
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                className="bg-red-600 hover:bg-red-700 px-5 py-2 text-sm rounded-lg shadow"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>

                        </div>
                    )}
                    <div className=" flex flex-col mt-8 w-full max-w-4xl">
                        <div className="w-full mb-6">
                            <h1
                                className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight text-center"


                            >
                                {post.title}
                            </h1>
                        </div>
                        <div
                            className="browser-css text-lg leading-relaxed text-gray-800 bg-white  p-6 rounded-xl shadow-sm border border-gray-200"


                        >
                            {parse(post.content)}
                        </div>
                    </div>
                </div>




            </Container>
        </div>


    ) : null;
}