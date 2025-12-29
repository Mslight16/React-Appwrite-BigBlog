import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config"
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'
import { Link } from 'react-router-dom'

function MyPosts() {
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true) 
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        if (userData?.$id) {
            console.log("Fetching posts for:", userData.$id);
            
            appwriteService.getPosts([Query.equal("userId", userData.$id)])
                .then((posts) => {
                    if (posts) {
                        setPosts(posts.documents)
                    }
                })
                .finally(() => {
                    setLoader(false) 
                })
        }
    }, [userData]) 

    // 1. Show a loader while waiting for userData or the API
    if (loader && !posts.length) {
        return (
            <div className="w-full py-20 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                <p className="mt-4 text-gray-600">Loading your posts...</p><span>Do a Refresh if not loading</span>
            </div>
        )
    }

    // 2. Show "Empty" state only if loading is finished and no posts exist
    if (posts.length === 0) {
        return (
            <div className="w-full min-h-[60vh] flex flex-col justify-center items-center bg-gray-50 rounded-3xl p-10">
                <h1 className="text-3xl font-extrabold mb-4 text-gray-800">Your Dashboard</h1>
                <p className="text-gray-600 mb-10 text-center">You haven't posted anything yet.</p>
                <Link to="/add-post">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700">
                        Create New Post
                    </button>
                </Link>
            </div>
        )
    }

    // 3. Show the actual posts
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

export default MyPosts