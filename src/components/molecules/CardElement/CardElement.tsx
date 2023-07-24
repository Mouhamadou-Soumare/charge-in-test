import React from 'react';
import "./cardElement.scss";

interface CardElementProps {
  imgSrc: string;
  title: string;
  children: React.ReactNode;
  value: string;
}

const CardElement: React.FC<CardElementProps> = ({ imgSrc, title, children, value }) => {
  return (
    <div className='container-element-selected'>
      <div className='border-right'><img src={imgSrc} alt={title} className='img-element' /></div>
      <div>
        <div>{title}</div>
        <div className='border-right'>
          <ul>
            {children}
          </ul>
        </div>
      </div>
      <div className='value-element'>
        {value}
      </div>
    </div>
  );
};

export default CardElement;
