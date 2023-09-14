import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="grid grid-cols-4 text-center my-20">
            <p className="bg-sky-300 py-12 text-lg font-medium flex justify-center items-center gap-4 text-white"><FaTwitter />Twitter</p>
            <p className="bg-blue-500 py-12 text-lg font-medium flex justify-center items-center gap-4 text-white"><FaFacebookF />Facebook</p>
            <p className="bg-gray-400 py-12 text-lg font-medium flex justify-center items-center gap-4 text-white"><FaInstagram />Instagram</p>
            <p className="bg-red-500 py-12 text-lg font-medium flex justify-center items-center gap-4 text-white"><FaYoutube />Youtube</p>
        </div>
    );
};

export default SocialMedia;