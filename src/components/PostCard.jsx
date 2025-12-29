import '../App.css'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
      
        <div className="w-full bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <div className="w-full flex justify-center mb-4 overflow-hidden rounded-lg">
                <img 
                    src={appwriteService.getFileView(featuredImage)} 
                    alt={title}
                    // className="rounded-lg object-cover w-full h-48 hover:scale-105 transition-transform duration-300"
                    className='rounded-xl w-full h-48 object-cover bg-gray-200'
                />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                {title}
            </h2>
        </div>
    </Link>

  )
}

export default PostCard
