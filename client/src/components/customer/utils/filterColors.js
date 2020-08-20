import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor, selectProduct } from '../../features/product/productSlice';

export const FilterColor = ({ color }) => {
  const dispatch = useDispatch();
  const { product } = useSelector(selectProduct);

  const isActive = product.color === color ? 'border border-primary' : '';
  return (
    <span
      class={`filters__color ml-2 cursor-pointer ${isActive}`}
      onClick={() => {
        dispatch(setColor(color));
      }}
      style={{ backgroundColor: color }}
    ></span>
  );
};

export const FilterColors = ({ colors }) => {
  return (
    <div className='d-flex align-items-end font-Futura-light '>
      <div class='filters w-100 d-flex justify-content-between align-items-center'>
        <h6 className='mb-0 font-Futura-light'>COLOR</h6>
        <div class='filters__item d-flex ml-4'>
          {colors.map((color) => (
            <FilterColor key={color} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};
