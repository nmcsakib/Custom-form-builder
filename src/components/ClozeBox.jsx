import { FaDiceFour, FaImage } from "react-icons/fa";

const ClozeBox = () => {
return (
<div className="w-full h-full">
<span className="px-2 py-1 bg-gray-400 text-sm rounded-full text-white">Cloze</span>
<section className="flex justify-evenly mt-5 mb-3 pb-4">
    <aside className="w-11/12">
        <input type="text" placeholder="Add description" className="border-b text-xl w-full outline-none" />
    </aside>
    <div className="w-[1px] h-11/12 bg-gray-500"></div>
    <aside>
        <FaImage className="text-2xl text-gray-500 cursor-pointer"/>
    </aside>
    </section>

    <section>
    <p className="text-sm">Preview <sup className="text-red-500">*</sup></p>  
    <div className="border rounded-md px-3 py-3 my-5">
    <p className="">______ Are you ?</p>
    </div>  
    <p className="text-sm">Sentence <sup className="text-red-500">*</sup></p>  

    <div className="border rounded-md px-3 py-3">
    <input type="text" className=" w-full border-none outline-none" placeholder="Enter Sentence"/>
    </div>  
    <div className="my-8">
    <h3 className="text-xl mb-3">Items</h3>
        <div className="flex items-center gap-3 w-1/4 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input type="radio" name="" id="" />
            <input className="w-full border-b outline-none" placeholder="Option" type="text" /></div>
        <div className="flex items-center gap-3 w-1/4 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input type="radio" name="" id="" />
            <input className="w-full border-b outline-none" placeholder="Option" type="text" /></div>
        <div className="flex items-center gap-3 w-1/4 rounded-md border p-2 my-3">
            <FaDiceFour className="text-gray-500"/>
            <input type="radio" name="" id="" />
            <input className="w-full border-b outline-none" placeholder="Option" type="text" /></div>
    </div>
    </section>    
</div>
);
};
export default ClozeBox;