import Image from 'next/image'

function Card(props) {
  return (
    <div
      className={`bg-white rounded-lg card shadow-xl px-10 max-h-56 border-t-4 w-[350px] mb-12 ${props.BorderColor}`}
    >
      <h1 className='mt-7 font-semibold text-xl'>{props.Title}</h1>
      <p className='text-[#a3a5ae] mt-2 mb-10 text-sm'>{props.Copy}</p>
      <div className='grid justify-items-end pb-7'>
        <Image src={props.Icon} alt={props.Title} width='50' height='50' />
      </div>
    </div>
  )
}

export default Card
