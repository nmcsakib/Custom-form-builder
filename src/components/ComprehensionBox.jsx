import { FaDiceFour, FaImage } from "react-icons/fa";

const ComprehensionBox = () => {
return (
<div>
<span className="px-2 py-1 bg-gray-400 text-sm rounded-full text-white">Comprehension</span>
<section className="flex justify-evenly mt-5 mb-3 pb-4">
    <aside className="w-11/12">
        <input type="text" placeholder="Add passage" className="border-b text-xl w-full outline-none" />
    </aside>
    <div className="w-[1px] h-12/11 bg-gray-500"></div>
    <aside>
        <FaImage className="text-2xl text-gray-500 cursor-pointer"/>
    </aside>
    </section>

    <section>
    <p className="text-sm">Question <sup className="text-red-500">*</sup></p>  

<div className="border rounded-md px-3 py-3 mb-8 flex items-center">
<input type="text" className=" w-full border-none outline-none" placeholder="Enter a question"/>
<FaImage className="text-2xl text-gray-500 cursor-pointer"/>
</div>  

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
    </section>
    </div>
    
);
};
export default ComprehensionBox;