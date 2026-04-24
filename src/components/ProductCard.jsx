import Image from "next/image";
import { FaDollarSign } from "react-icons/fa";


const ProductCard = ({ product }) => {

    const { title, thumbnail, tags, stock, price, rating, description } = product;

    return (
        <div className="card bg-base-100  shadow-sm">

            <figure>
                <Image
                    src={thumbnail}
                    alt={title}
                    width={300}
                    height={300}
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>

                <div className="flex gap-2 my-2">
                    {tags.map((tag, index) => <div key={index} className="badge badge-soft badge-outline badge-success font-medium">{tag}</div>)}
                </div>

                <p className="text-gray-600 font-medium">{description}</p>

                <div className="card-actions justify-between mt-5">
                    <h3 className="flex items-center font-semibold text-lg">Price: <FaDollarSign/>{price}</h3>
                    <div className="btn btn-primary">Show Details</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;