import React from 'react'
import { Link } from 'react-router-dom'
import Togglemode from './Togglemode'


// function App() {
//     const [isLightMode, setIsLightMode] = useState(true);

//     // Function to toggle the mode
//     const toggleMode = () => {
//         setIsLightMode(!isLightMode);
//     };

    const Navbar = () => {
        return (
            <>
                <nav className='Navbar flex justify-between drop-shadow-xl w-5'>
                    <ul className='flex'>
                        <li className='p-3 '>
                            <span class="animate-pulse">
                            <Togglemode />
                            </span>

                        </li>

                    </ul>
                    <ul className='flex'>
                        <li className='p-3'>
                            <span class="relative flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>

                            <a Link to={"/"}><Link to={"/"} className='p-3 bg-sky-900 hover:bg-sky-500  rounded-full'>Home</Link></a>
                        </li>

                        <li className='p-3'>
                            <span class="relative flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>

                            <a Link to={"/Myprofiles"}><Link to={"/Myprofiles"} className='p-3 bg-sky-900 hover:bg-sky-500  rounded-full'>MyProfiles</Link></a>

                        </li>
                    </ul>



                </nav >
            </>

        )
    }

export default Navbar