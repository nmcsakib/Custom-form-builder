import { FaAngleDown, FaDiceFour, FaImage } from "react-icons/fa";

const CategoryBox = () => {
return (
<div className="w-full h-full">
    <span className="px-2 py-1 bg-gray-400 text-sm rounded-full text-white">Categories</span>
<section className="flex justify-evenly mt-5 mb-3 pb-4">
    <aside className="w-11/12">
        <input type="text" placeholder="Add description" className="border-b text-xl w-full outline-none" />
    </aside>
    <div className="w-[1px] h-12/11 bg-gray-500"></div>
    <aside>
        <FaImage className="text-2xl text-gray-500 cursor-pointer"/>
    </aside>
    </section>
    <section>
        <h3 className="text-xl mb-3">Categories</h3>
        <div className="flex items-center gap-3 w-1/4 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input className="w-full border-b outline-none" placeholder="Option" type="text" /></div>
        <div className="flex items-center gap-3 w-1/4 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input className="w-full border-b outline-none" placeholder="Option" type="text" /></div>
        <div className="flex items-center gap-3 w-1/4 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input className="w-full border-b outline-none" placeholder="Option" type="text" /></div>

            <section className="my-10 w-full ">
        <h3 className="text-xl mb-3 ">Items</h3>
                <div className="flex justify-between gap-12 px-5 w-full">
                    <div className="w-full">
                    <div className="flex items-center gap-3 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input className="w-full outline-none" placeholder="Option" type="text" />
            
            </div>
            <div className="flex items-center gap-3 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input className="w-full outline-none" placeholder="Option" type="text" /></div>
            <div className="flex items-center gap-3  rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input className="w-full outline-none" placeholder="Option" type="text" /></div> 
                    </div>


                    <div className="w-full">
                    <div className="flex items-center gap-3 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input className="w-full outline-none" placeholder="Option" type="text" />
            <FaAngleDown/>
            </div>
            <div className="flex items-center gap-3 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input className="w-full outline-none" placeholder="Option" type="text" />
            <FaAngleDown/>
            </div>
            <div className="flex items-center gap-3 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input className="w-full outline-none" placeholder="Option" type="text" />
            <FaAngleDown/>
            </div>
                    </div>
                </div>
            </section>
    </section>
</div>
);
};
export default CategoryBox;