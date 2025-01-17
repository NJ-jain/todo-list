import { Calendar, Info, Plus, Route, School, SquareMenu, Star } from 'lucide-react'
import React from 'react'
import DoughnutChart from './donutChat'
import { useSelector } from 'react-redux';

const ProfileImage = React.memo(() => (
    <div className='rounded-full w-32 h-32 relative overflow-hidden'>
        <img className='object-cover w-full h-full' src='https://s3-alpha-sig.figma.com/img/333c/2d05/a5f50ecf137e000854b1631514ec0670?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UI98xJz9KlKtBp63kzXrnd1bcYVR7W3jjoFNxYCAmo~bN1HOiSZiaBT~0vlO3BcH4Tum0k8XatjemnKd-nZ-A2pLSV-D~z8XdKJev6LwLWE51pr53Dfu2~ELCxkBDkqDBkvirqOK7hdKmZ6X67uPo83kcY86SpqHc4Tux9tcyrKGlVjJ8LibsnlfKlltEYE90SXA2LWTiIahuwfnl7vz0nVAe0g7JBPgKoXZHqQOmi~59QARMhJcCWKBCHfTaNO5oW-qNZneFC-DU7Q-RyZ--1gAvTbdmBIAbR1np68xhydNgXNv-JyaghB-IYRy0iNX3QoohS4W1CIX-jwsEkBPAA__' alt='' />
    </div>
));

const Aside = () => {


    const isOpen = useSelector((state) => state.aside.isOpen); // Get the isOpen state from Redux
    if (!isOpen) return null;
    return (
        <div className='w-1/5 bg-[#EEF6EF] flex-1 p-4 relative mt-28 pt-24'>
            <div className='w-full flex flex-col items-center gap-2 -top-16 absolute justify-center'>
                <ProfileImage />
                <p>Hey, ABCD</p>
            </div>

            <div className='flex flex-col gap-4 p-4 '>
                <ul className='flex flex-col bg-white gap-2 py-2'>
                    <li className='flex items-center space-x-2  p-2 hover:bg-[#35793729] hover:rounded-lg hover:text-green-900'> {/* Add flexbox styling */}
                        <SquareMenu /> {/* Icon */}
                        <span>All Tasks</span> {/* Name next to the icon */}
                    </li>
                    <li className='flex items-center space-x-2 bg-white p-2 hover:bg-[#35793729] hover:rounded-lg hover:text-green-900'> {/* Add flexbox styling */}
                        <Calendar /> {/* Icon */}
                        <span>Today</span> {/* Name next to the icon */}
                    </li>
                    <li className='flex items-center space-x-2 bg-white p-2 hover:bg-[#35793729] hover:rounded-lg hover:text-green-900'> {/* Add flexbox styling */}
                        <Star /> {/* Icon */}
                        <span>Important</span> {/* Name next to the icon */}
                    </li>
                    <li className='flex items-center space-x-2 bg-white p-2 hover:bg-[#35793729] hover:rounded-lg hover:text-green-900'> {/* Add flexbox styling */}
                        <Route />{/* Icon */}
                        <span>Planned</span> {/* Name next to the icon */}
                    </li>
                    <li className='flex items-center space-x-2 bg-white p-2 hover:bg-[#35793729] hover:rounded-lg hover:text-green-900'> {/* Add flexbox styling */}
                        <School />{/* Icon */}
                        <span>Assigned to me </span> {/* Name next to the icon */}
                    </li>
                </ul>

                <ul className='flex flex-col bg-white gap-2 py-2'>
                    <li className='flex items-center space-x-2  p-2 hover:bg-[#35793729] hover:rounded-lg hover:text-green-900'> {/* Add flexbox styling */}
                        <Plus /> {/* Icon */}
                        <span>Add list</span> {/* Name next to the icon */}
                    </li>

                </ul>
                <ul className='flex flex-col bg-white gap-2 py-2'>
                    <li className='flex items-center space-x-2  p-2 justify-between '> {/* Add flexbox styling */}
                        <span>Today Tasks</span> {/* Name next to the icon */}
                        < Info />
                    </li>
                    <li>
                        <DoughnutChart />
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Aside