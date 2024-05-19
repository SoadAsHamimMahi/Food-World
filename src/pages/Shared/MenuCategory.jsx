import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import { Link } from 'react-router-dom';
import Cover from './Cover';

const MenuCategory = ({ items, title, img }) => {
    console.log('MenuCategory title:', title);
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title} />}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => (
                        <MenuItem
                            key={item._id}
                            item={item}
                        />
                    ))
                }
            </div>
            <Link className='flex justify-center' to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button>
            </Link>
        </div>
    );
};

export default MenuCategory; 
