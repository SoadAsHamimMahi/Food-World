import React from 'react';
import Cover from '../Shared/Cover';
import banner from '../../assets/menu/banner3.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from '../Shared/MenuCategory';
import useMenu from '../hooks/useMenu';
import desert from '../../assets/menu/dessert-bg.jpeg';
import pizza from '../../assets/menu/pizza-bg.jpg';
import soup from '../../assets/menu/soup-bg.jpg';
import salad from '../../assets/menu/salad-bg.jpg'; // Added missing import for salad background image

const OurMenu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');
    const salads = menu.filter(item => item.category === 'salad'); // Changed 'salad' to 'salads' to match the filter name
    const soups = menu.filter(item => item.category === 'soup');
    const pizzas = menu.filter(item => item.category === 'pizza');

    return (
        <div>
            <Cover img={banner} title={'Our Menu'} description={'Would you like to try a dish?'}></Cover>

            <SectionTitle subHeading={`Don't miss`} heading={`TODAY'S OFFER`}></SectionTitle>
            <MenuCategory items={offered} />

            <Cover img={desert} title={'DESSERTS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={desserts} />

            <Cover img={pizza} title={'PIZZA'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={pizzas} />

            <Cover img={salad} title={'SALAD'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={salads} />  {/* Changed 'salad' to 'salads' to match the filter name */}

            <Cover img={soup} title={'SOUP'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategory items={soups} />  {/* Changed 'soups' to 'soups' to match the filter name */}
        </div>
    );
};

export default OurMenu;
