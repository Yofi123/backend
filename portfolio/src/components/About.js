import React from 'react'
import '/home/yofi/React-portfolio/backend/portfolio/src/sageprojects/IMG_1969.JPG'
import { AtSymbolIcon } from "@heroicons/react/solid";

export default function About() {
  const [showModal, setShowModal] = React.useState(false);
    return(
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Yoftahe.
              <br className="hidden lg:inline-block" />I love to build amazing
              apps.
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a fullstack developer based in Addis and have a work experience. I love creating beautiful and functional websites and web 
              applications.In my free time, I enjoy doing some exercises.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact" onClick={() => setShowModal(true)}
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
                </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={require("../sageprojects/IMG_1969.JPG")}
          />
        </div>
      </div>
       {/* contact form dialog */}
       {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-md font-bold text-gray-600">
                   Contact me via
                  </h3>
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 <p className ="text-green-600 hover:underline"> 
                 <AtSymbolIcon className="w-4 h-4 inline-block mb-0" /> 
                 <a href ="https://t.me/@Yofi123/" rel="noreferrer" target="_blank" >Yofi123 on telegram</a>
                 </p>
                </div>
                       {/*footer*/}
                       <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
    )
}