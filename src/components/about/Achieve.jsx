import React from 'react'

const Achieve = ({number, detail}) => {
    return (
            <div className="about-achievement hover:scale-110 transition duration-200 bg-white/5 border border-white/10 shadow-xl shadow-white/5 p-8 rounded-lg">
                <h1 className='text-5xl font-semibold text-gray-200 text-center' >{number}+</h1>
                <p>{detail}</p>
            </div>
    )
}

export default Achieve