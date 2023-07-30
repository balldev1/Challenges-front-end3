'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'


export default function Home() {
  const [score, setScore] = useState('');
  const router = useRouter();

  const handleScoreChange = (value) => {
    setScore(value);
  }

  const handleSummit = () => {
    console.log(`คะแนนที่ส่งไป: ${score}`);
    if (!score) {
      alert('Please select a score');
    } else {
      router.push(`/thank/${score}`);
    }
  }

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <div className='flex  justify-center items-center h-screen'>
      <div className='bg-gradient-to-b  from-gray-800  to-gray-900 sm:w-[500px] sm:h-[450px] w-[340px] h-[460px] rounded-3xl'>
        <div className='mt-10 ml-10 flex flex-col gap-10 mx-10'>
          <div className='bg-gray-700  w-[50px] h-[50px] rounded-full  flex text-center justify-center items-center'>
            <AiFillStar size={25} className='text-orange-500' />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-white text-3xl'>How did we do ?</h1>
            <span className='text-gray-400' >Please let us know how we did with your support
              <br />request. All feedback is appreciated to help us
              <br />improve our offering !
            </span>
            {/* {form button} */}
            <div className='flex flex-col  gap-5 sm:mt-2'>
              <div className='flex justify-between'>
                <button onClick={() => handleScoreChange(1)}
                  className={`bg-gray-700 text-gray-400 text-xl  focus:outline-none focus:ring focus:bg-gray-300 focus:text-white border-none
                 hover:bg-orange-500 hover:text-white sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full  flex text-center justify-center items-center ${score === 1 ? 'bg-orange-500 text-white' : ''}`}>1</button>
                {/* อื่น ๆ คือเช็คค่า score เพื่อให้ปุ่มที่มี score เท่ากับ score ที่เลือกมีสีส้ม */}
                <button onClick={() => handleScoreChange(2)}
                  className={`bg-gray-700 text-gray-400 text-xl  focus:outline-none focus:ring focus:bg-gray-300 focus:text-white border-none
                 hover:bg-orange-500 hover:text-white sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full  flex text-center justify-center items-center ${score === 2 ? 'bg-orange-500 text-white' : ''}`}>2</button>
                <button onClick={() => handleScoreChange(3)}
                  className={`bg-gray-700 text-gray-400 text-xl  focus:outline-none focus:ring focus:bg-gray-300 focus:text-white border-none
                 hover:bg-orange-500 hover:text-white sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full  flex text-center justify-center items-center ${score === 3 ? 'bg-orange-500 text-white' : ''}`}>3</button>
                <button onClick={() => handleScoreChange(4)}
                  className={`bg-gray-700 text-gray-400 text-xl  focus:outline-none focus:ring focus:bg-gray-300 focus:text-white border-none
                 hover:bg-orange-500 hover:text-white sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full  flex text-center justify-center items-center ${score === 4 ? 'bg-orange-500 text-white' : ''}`}>4</button>
                <button onClick={() => handleScoreChange(5)}
                  className={`bg-gray-700 text-gray-400 text-xl  focus:outline-none focus:ring focus:bg-gray-300 focus:text-white border-none
                 hover:bg-orange-500 hover:text-white sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full  flex text-center justify-center items-center ${score === 5 ? 'bg-orange-500 text-white' : ''}`}>5</button>
              </div>
              <button onClick={handleSummit}
                className='bg-gradient-to-b  from-orange-500 to-orange-400 text-white  w-full  sm:h-[50px] h-[40px] rounded-3xl sm:mt-3 
                hover:text-orange-500 hover:bg-white hover:from-rose-100 text-xl font-bold'>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}






