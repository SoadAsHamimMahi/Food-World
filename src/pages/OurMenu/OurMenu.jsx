import React from 'react';
import Cover from '../Shared/Cover';
import banner from '../../assets/menu/banner3.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from '../Shared/MenuCategory';
import useMenu from '../hooks/useMenu';
import desert from '../../assets/menu/dessert-bg.jpeg';
import pizza from '../../assets/menu/pizza-bg.jpg';
import soup from '../../assets/menu/soup-bg.jpg';
import salad from '../../assets/menu/salad-bg.jpg';

const OurMenu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const pizzas = menu.filter(item => item.category === 'pizza');

    return (
        <div>
            <Cover img={banner} title={'Our Menu'} description={'Would you like to try a dish?'} />

            <SectionTitle subHeading={`Don't miss`} heading={`TODAY'S OFFER`} />
            <MenuCategory items={offered} />

            <MenuCategory items={desserts} img={desert} title="dessert" />

            {/* <Cover img={pizza} title={'pizza'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} /> */}
            <MenuCategory items={pizzas} img={pizza} title="pizza" />

            {/* <Cover img={salad} title={'salad'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} /> */}
            <MenuCategory items={salads} img={salad} title="salad" />

            {/* <Cover img={soup} title={'soup'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} /> */}
            <MenuCategory items={soups} img={soup} title="soup" />
        </div>
    );
};

export default OurMenu;
