import { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import '../App.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// function Home() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])

//     if (posts.length === 0) {
//         return (
//             <section className="m-5 py-20 px-6 rounded-3xl shadow-lg bg-linear-to-r from-purple-500 to-blue-500 text-white"
// >                <div className="max-w-5xl mx-auto text-center space-y-6">
//                     <h1 className="text-5xl font-bold tracking-wide drop-shadow-lg">
//                         Welcome to BigBlog
//                     </h1>

//                     <p className="text-lg opacity-90 max-w-2xl mx-auto">
//                         Read, Write, and Share your thoughts with the world.
//                         Dive into modern blogging with community interaction and creativity.
//                     </p>
//                     <Link to="/login">
//                         <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-purple-200 transition">
//                             Login to read post
//                         </button>
//                     </Link>
//                 </div>
//             </section>

//         )
//     }
//     return (

//         <Container>
//             <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-linear-to-b from-white to-indigo-50">

//                 <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
//                     Welcome Back 👋
//                 </h1>

//                 <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
//                     You are logged in! Start reading posts, create a new article, or explore amazing content from the community.
//                 </p>

//                 <div className="flex flex-wrap gap-4 justify-center">
//                     <Link to="/add-post">
//                         <button className="
//         bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md
//         hover:bg-indigo-700 active:scale-95 transition-all duration-200">
//                             Create New Post
//                         </button>
//                     </Link>
//                     <Link to="/all-posts">
//                         <button className="
//         bg-white text-indigo-600 font-semibold px-5 py-3 rounded-lg shadow-md border border-indigo-300
//         hover:bg-indigo-50 active:scale-95 transition-all duration-200">
//                             View All Posts
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </Container>
//     )
// }
function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status) // 2. Get status

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    // 3. Logic change: If not logged in, show the login prompt
    if (authStatus === false) {
        return (
                <section className="m-5 py-20 px-6 rounded-3xl shadow-lg bg-linear-to-r from-purple-500 to-blue-500 text-white">                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-5xl font-bold tracking-wide drop-shadow-lg">
                        Welcome to BigBlog
                    </h1>

                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Read, Write, and Share your thoughts with the world.
                        Dive into modern blogging with community interaction and creativity.
                    </p>
                    <Link to="/login">
                        <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-purple-200 transition">
                            Login to read posts
                        </button>
                    </Link>
                </div>
            </section>
        )
    }

    // 4. If logged in but no posts exist yet
    if (posts.length === 0) {
        return (
            <div className="py-8">
                <Container>
                    <h1 className="text-2xl font-bold">No posts to display</h1>
                </Container>
            </div>
        )
    }

    // 5. If logged in AND posts exist
    return (
        <Container>
             <Container>
            <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-linear-to-b from-white to-indigo-50">

                 <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                     Welcome Back 👋
                 </h1>

                 <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                     You are logged in! Start reading posts, create a new article, or explore amazing content from the community.
                 </p>

                 <div className="flex flex-wrap gap-4 justify-center">
                     <Link to="/add-post">
                         <button className="
         bg-purple-500 text-white font-semibold px-5 py-3 rounded-lg shadow-md
         hover:bg-purple-700 active:scale-95 transition-all duration-200">
                             Create New Post
                         </button>
                     </Link>
                     <Link to="/all-posts">
                         <button className="
         bg-white text-indigo-600 font-semibold px-5 py-3 rounded-lg shadow-md border border-indigo-300
         hover:bg-indigo-50 active:scale-95 transition-all duration-200">
                             View All Posts
                         </button>
                     </Link>
                 </div>
             </div>
         </Container>
        </Container>
    )
}

export default Home