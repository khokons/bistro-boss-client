import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/banner.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-12">
            <SectionTitle subHeading="check it out" heading="Featured Item" />
            <div className="flex flex-col md:flex-row justify-center items-center bg-slate-500 bg-opacity-60 py-12 px-4 md:px-36">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <img src={featuredImg} alt="Featured" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 md:ml-10 text-center md:text-left">
                    <p className="text-sm md:text-base">Aug 20, 2029</p>
                    <p className="uppercase font-semibold text-lg md:text-xl my-2">Where can I get some?</p>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
