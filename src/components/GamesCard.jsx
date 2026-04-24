import Image from "next/image";
import Link from "next/link";


const GamesCard = ({ games }) => {

    const { title, thumbnail, short_description, genre, publisher, freetogame_profile_url } = games;

    return (
        <div>
            <div className="card bg-base-100 border border-gray-200 shadow-lg w-full h-[450px] ">
                <figure>
                    <Image
                        src={thumbnail}
                        alt={title}
                        width={365}
                        height={206}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                
                        <button className="badge badge-soft badge-secondary badge-outline font-semibold">{genre}</button>
                        <p className="font-semibold my-1">Publisher: {publisher}</p>
              
                    <p className="text-gray-600 font-medium">{short_description}</p>
                    
                    <div className="card-actions justify-end">
                 
                        <Link href={freetogame_profile_url} className="btn bg-green-500 text-white transition-all duration-500 hover:scale-95">Play Now</Link>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamesCard;