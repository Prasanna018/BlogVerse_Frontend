import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PostCard = ({ id, title, description, imageUrl }) => {
    const truncatedText = `${description.substring(0, 20)}...`;

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
        >



            <Link to={`/post/${id}`} className="block">
                <motion.div
                    className="relative overflow-hidden aspect-[16/9]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition-colors duration-200">
                        {title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        {truncatedText}
                    </p>

                    <span className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 
                   transition-colors duration-200">
                        Read More →
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

export default PostCard;