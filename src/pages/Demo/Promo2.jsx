import React from 'react';
import Promo3 from './Promo3';

const Promo2 = ({ productDetails }) => {
    console.log('from promo2',productDetails);
    return (
        <Promo3 productDetails={productDetails}></Promo3>
        // <div></div>
    );
};

export default Promo2;