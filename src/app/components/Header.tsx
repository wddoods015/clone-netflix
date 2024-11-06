import React from 'react';
import Image from 'next/image';


const Header: React.FC = () => {
    return (
        <header className='w-[95%] h-auto pt-[10px] flex justify-between items-center relative z-20'>
           <Image src="/Netflix_Logo_PMS.png" alt="Netflix_Logo" width={150} height={0} layout="intrinsic"/> 
           <div className='flex gap-2'>
           <select name='LanguageSelect' className='bg-transparent w-[100px] h-[35px] rounded-full border border-2 text-white'>
            {/* <Image src='/translate_icon.svg' alt='translate_icon' width={40} height={0} layout="intrinsic"/> */}
            <option className='text-black'>한국어</option>
            <option className='text-black'>English</option>
           </select>
            <button className='w-[85px] h-[35px] bg-white rounded-full'>로그인</button>
           </div>
        </header>        
    );
};

export default Header;