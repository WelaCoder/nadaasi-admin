import React from 'react';
import SaleItem from './SaleItem';
export default function SalesList({ sales }) {
    return (
        <>
            {sales.map((feedback) => (
                <SaleItem key={feedback._id} feedback={feedback} />
            ))}
        </>
    );
}
