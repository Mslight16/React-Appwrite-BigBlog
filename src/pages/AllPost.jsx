import '../App.css'
import { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true) // New Loading State

    useEffect(() => {
        appwriteService.getPosts([])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
            .finally(() => setLoading(false)) // Stop loading regardless of success/fail
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full min-h-[60vh] flex flex-col justify-center items-center bg-linear-to-br from-purple-100 via-white to-blue-100 rounded-xl shadow-lg p-10 border border-gray-200">
                <p className="text-gray-500 text-xl font-medium m-10 tracking-wide">
                    No posts available.
                </p>
                <Link to="/add-post">
                    <button className="
        bg-purple-500 text-white font-semibold px-5 py-3 rounded-lg shadow-md
        hover:bg-purple-700 active:scale-95 transition-all duration-200">
                        Create New Post
                    </button>
                </Link>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="w-full h-64 flex justify-center items-center">
                {/* Simple CSS Spinner */}
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts