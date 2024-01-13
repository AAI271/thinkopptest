import './item.css'
import Image from 'next/image'


interface Item {
    item: { id: number; types: string; img: string; title: string; date: string; };
    shapeId: number
  }
export const Item: React.FC<Item> = ({ item,shapeId }) =>{
    const shapes:string[] = ['leaf-right','leaf-left','circle']
  return (
          <div className={"slider-item"}>
            <div className={"img__container"+(item.title.length>34?" big":" small")}>
            <Image
              className={shapes[shapeId-1]}
              src={item.img}// Replace with your external image URL
              alt="Description of the image"
              fill
              loading='lazy'
              quality={100}
              sizes='(min-width:150px)'
              style={{
                  objectFit:'cover'
              }}
            />
            </div>
            <p className='slider-item__description'>{item.title}</p>
            <p className='slider-item__date'>{item.date}</p>
          </div>
  );
};