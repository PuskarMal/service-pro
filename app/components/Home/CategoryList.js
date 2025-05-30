"use client"
import React, { useState } from 'react'
import Data from "./../../../shared/Data"
import Image from 'next/image'
function CategoryList() {
    const [categoryList,setCategoryList] = useState(Data.CategoryListData)
    const [selectedCategory, setSelectedCategory] = useState();  
    return (
    <div className='max-w-lg mx-auto space-y-6 mt-[4px]'>
        <h2 className='text-lg pl-2 font-semibold text-gray-800'>Select Category</h2>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            {categoryList.map((item, index) => (
                <div key={index} className={`justify-center items-center flex flex-col bg-gray-100 
                p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer 
                ${selectedCategory==index ? 'grayscale-0 border-[1px]':null}  border-purple-400`}
                onClick={() => setSelectedCategory(index)}>
                  <Image src={item.icon}
                  alt={item.name}
                  width={40} height={40}/>
                  {item.name}
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryList