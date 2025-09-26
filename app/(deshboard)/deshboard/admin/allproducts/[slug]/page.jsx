import SingleProductSkeleton from "@/app/componnent/skelaton/SingleProductSkeleton "
import Link from "next/link"
import { ToastContainer } from "react-toastify"
const SingleProduct = () => {

    if (false) return <SingleProductSkeleton />


    return (
        <div className="">
            <div className="mb-7 items-center flex justify-between sticky top-[70px] bg-white py-4 pt-0">
                <span className="text-2xl font-bold ">Product Overview</span>
                <div className="flex justify-end gap-4 mt-6">
                    <Link href={'/deshboard/admin/allproducts'}
                        className="bg-sky-200 px-4 py-2 rounded-lg hover:bg-sky-300 transition cursor-pointer"
                    >
                        Back
                    </Link>
                    <button

                        className="bg-sky-400 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition flex items-center gap-2 justify-center cursor-pointer"
                    >

                        Confirm & Submit
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-4 col-span-3">
                    <p><strong>Name:</strong> {''}</p>
                    <p><strong>Type:</strong> {'productType'}</p>
                    <p><strong>Price:</strong> ${'productPrice'}</p>
                    <p><strong>Offer Price:</strong> ${'productofferPrice'}</p>
                    <p><strong>Status:</strong> {'productStatus' ? "Published" : "Draft"}</p>
                    <p><strong>Category:</strong></p>
                    <p><strong>Short Description:</strong> {'productShortDescription'}</p>
                    <p><strong>Description:</strong> {'productDescription'}</p>


                    <h3 className="font-bold mt-4 mb-2">Gallery Images</h3>
                    {/* {productImages?.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {productImages.map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img}
                                    alt={`Gallery ${idx}`}
                                    width={80}
                                    height={80}
                                    className="rounded-md border"
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No Gallery Images</p>
                    )} */}



                </div>

                <div className="w-full col-span-1">


                    <h3 className="font-bold mb-2">Thumbnail</h3>
                    {/* {productThumbnail ? (
                        <Image
                            src={productThumbnail}
                            alt="Thumbnail"
                            width={1000}
                            height={1000}
                            className="w-full rounded-md border"
                        />
                    ) : (
                        <p>No Thumbnail</p>
                    )} */}


                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SingleProduct;