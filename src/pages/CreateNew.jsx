import {FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CreateNew = () => {
return (
<section className="h-screen grid place-items-center bg-cyan-200">
    <Link to="/build-form" className="group transition-all duration-100 h-56 w-72 flex flex-col items-center gap-3 justify-center cursor-pointer bg-white shadow-md">
<FaPlus className='text-7xl group-hover:text-cyan-200'/>
<p className="text-3xl group-hover:text-cyan-200">Create Blank Form</p>
    </Link>
</section>
);
};
export default CreateNew;