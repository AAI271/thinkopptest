'use client';
import React, { useRef } from 'react';
import { Item } from '@/components/item/item'
import Image from 'next/image'
import left from '@/assets/left.svg'
import right from '@/assets/right.svg'

import './slider.css'



interface SliderProps {
    items: { id: number; types: string; img: string; title: string; date: string; }[];
  }
export const Slider: React.FC<SliderProps> = ({ items }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
  
    const shapes: number[] = [];
    items.map((el,index) => {
      let random = index**3%3+1;
        if (shapes.length > 0 && shapes[shapes.length - 1] === 3) {
        random = random % 2 + 1;
      }
      shapes.push(random);
    });
  
    return (
      <div>
        <div className='slider' ref={sliderRef}>
          {items.map((item, index) => (
            <div key={item.id}>
              <Item item={item} shapeId={shapes[index]} />
            </div>
          ))}
        </div>
        <div className="slider__btns">
            <Image
            onClick={() => { if (sliderRef.current) sliderRef.current.scrollLeft -= window.innerWidth * 0.21+8; }}
            src={left}
            alt="left icon"
            width={150}
            height={50}
            quality={100}
            />
          <Image
                      onClick={() => { if (sliderRef.current) sliderRef.current.scrollLeft += window.innerWidth * 0.21+8; }}

            src={right}
            alt="right icon"
            width={150}
            height={50}
            quality={100}
          />
        </div>
      </div>
    );
  };
  