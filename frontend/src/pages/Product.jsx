import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
    const { productID } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [ProductData, setProductData] = useState(false)
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productID) {
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData();
    }, [productID, products])

    return ProductData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* Product Data */}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* Product images  */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {
                            ProductData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    <div className="w-full sm:w-[80%]">

                        <img src={image} alt="" className="w-full h-auto" />
                    </div>
                </div>
                {/* Product Info  */}
                <div className="flex-1 ">
                    <h1 className='font-medium text-2xl mt-2'>{ProductData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">{currency}{ProductData.price}</p>
                    <p className="mt-5 text-gray-500 md:4/5">{ProductData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p className="">Select Size</p>
                        <div className="flex gap-2">
                            {ProductData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border  border-gray-300 py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(ProductData._id, size)}
                        className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
                    <ToastContainer />
                    <hr className='mt-8 sm:w-4/5' />
                    <div className="text-sm text-gray-500 mt-5 felx flex-col gap-1">
                        <p className="">100% Original Product</p>
                        <p className="">Cash on delivery is available on this product</p>
                        <p className="">Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
            </div>
            {/* dercroption and review sections */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border-0 px-5 text-sm">Description</b>
                    <p className="border-0 px-5 text-sm">Reviews (122)</p>
                </div>
                <div className="flex flex-col gap-4 border-0 px-6 py-6 text-sm text-gray-600">
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illo ipsam iste earum eum ab a sed dolor, maxime dicta quaerat atque, sapiente numquam quod eos impedit cum facilis consectetur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis et at consequatur odit provident illum odio distinctio iste officiis, ut rem libero nesciunt repudiandae earum nihil quaerat quo voluptate!</p>
                </div>
            </div>

            {/* display related products */}
            <RelatedProducts category={ProductData.category} subCategory={ProductData.subCategory} />

        </div>
    ) : <div className="opacity-0"></div>
}

export default Product
