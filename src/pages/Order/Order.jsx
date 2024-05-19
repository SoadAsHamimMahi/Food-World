import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import { useParams } from 'react-router-dom';
import useMenu from '../hooks/useMenu';
import orderCoverImg from '../../assets/shop/banner2.jpg';
import OrderTab from './OrderTab';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0); // Default to 0 if category is not found
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    useEffect(() => {
        if (initialIndex >= 0) {
            setTabIndex(initialIndex);
        }
    }, [category, initialIndex]);

    return (
        <div>
            <Helmet>
                <title>Food World | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food" />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salads} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzas} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
