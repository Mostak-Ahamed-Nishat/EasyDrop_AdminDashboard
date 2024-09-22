import React from 'react';
import Promo2 from './Promo2';

const Promo1 = () => {
    const productDetails = [
        { index: 1, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
        { index: 2, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
        { index: 3, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
        { index: 4, name: 'HeadPhone mi 2', productQut:'02', amount:'25,555',  details: '..' },
       
      ];
    console.log(productDetails);
    return (
        <Promo2 productDetails={productDetails}></Promo2>
        // <div></div>
    );
};

export default Promo1;