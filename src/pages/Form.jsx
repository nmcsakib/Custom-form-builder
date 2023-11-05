import { FaImage } from "react-icons/fa";
import Button from "../components/Button";
import CategoryBox from "../components/CategoryBox";
import ClozeBox from "../components/ClozeBox";
import ComprehensionBox from "../components/ComprehensionBox";

const Form = () => {
return (
<div>
    <div className="py-4">
    <h1 className="text-4xl font-semibold mb-3">Build your Custom form</h1>
    <hr className="border-b-[1.5px] border-gray-500" />
    <section className="flex justify-evenly  my-3 py-4 px-3">
    <aside className="w-5/6">
        <input type="text" placeholder="Add a form title" className="border-b text-2xl w-full outline-none" />
    </aside>
    <div className="w-[1px] h-12/11 bg-gray-500"></div>
    <aside>
        <FaImage className="text-3xl text-gray-500 cursor-pointer"/>
    </aside>
    </section>

    <section className="border my-8 p-4">
   <CategoryBox/>
    </section>
    <section className="border my-8 p-4">
   <ClozeBox/>
    </section>
    <section className="border my-8 p-4">
   <ComprehensionBox/>
    </section>
    <Button text="Add Question"/>
    </div>    
</div>
);
};
export default Form;