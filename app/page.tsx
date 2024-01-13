import { Slider } from '@/components/slider/slider'
import data from '../data/mockData';

export default function Home() {
  return (
    <main>
      <section className='about'>
        <div className="about__content">
          <h1 className='about__title'>Полезные материалы</h1>
          <p className='about__description'>
            Собрали для вас полезные исследования схемы кормления и другие
            материалы, которые пригодятся для лучших результатов на вашем
            хозяйстве
          </p>
        </div>
        <Slider items = {data}/>
      </section>  
    </main>
  )
}
