import Head from 'next/head'
import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Four Card Feat</title>
        <meta name='description' content='Four Card Feat' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main
        className='bg-[#fafafa] min-h-screen'
        style={{ fontFamily: 'Poppins' }}
      >
        <div className='text-center'>
          <p className='text-[#4c4e61] mt-10 text-4xl font-extralight leading-[3rem]'>
            Reliable, efficient delivery
            <br />
            <span className='font-semibold'>Powered by Technology</span>
          </p>
          <p className='text-[#a3a5ae] mt-3 mx-[25rem]'>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className='grid grid-cols-3 justify-center mt-14'>
          <div className='ml-20 mt-28'>
            <Card
              Title='Supervisor'
              Copy='Monitors activity to identify project roadblocks'
              Icon='/icon-supervisor.svg'
              BorderColor='border-[#45d3d3]'
            />
          </div>
          <div>
            <Card
              Title='Team Builder'
              Copy='Scans our talent network to create the optimal team for your project'
              Icon='/icon-team-builder.svg'
              BorderColor='border-[#ea5353]'
            />
            <Card
              Title='Karma'
              Copy='Regularly evaluates our talent to ensure quality'
              Icon='/icon-karma.svg'
              BorderColor='border-[#fcaf4a]'
            />
          </div>
          <div className='mt-28' style={{ marginLeft: '-5rem' }}>
            <Card
              Title='Calculator'
              Copy='Uses data from past projects to provide better delivery estimates'
              Icon='/icon-calculator.svg'
              BorderColor='border-[#549ef2]'
            />
          </div>
        </div>
      </main>
    </div>
  )
}
