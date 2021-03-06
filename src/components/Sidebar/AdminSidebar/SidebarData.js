import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
    {
      title: 'Overview',
      path: '#',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: 'Users',
          path: '/overview/users',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Revenue',
          path: '/overview/revenue',
          icon: <IoIcons.IoIosPaper />
        }
      ]
    },
    {
      title: 'Products',
      path: '#',
      icon: <FaIcons.FaCartPlus />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: ' Add Pizza',
          path: '/admindashboard/addpizza',
          icon: <FaIcons.FaPizzaSlice/>,
          cName: 'sub-nav'
        },
        {
          title: 'Add Dessert',
          path: '/admindashboard/adddessert',
          icon: <RiIcons.RiCake3Line />,
          cName: 'sub-nav'
        },
        {
          title: 'Add Starter',
          path: '/reports/reports3',
          icon: <FaIcons.FaCartPlus />
        }
      ]
    },
   
    
    {
      title: 'Display Items',
      path: '#',
      icon: <FaIcons.FaCartPlus />,
  
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: 'Pizzas',
          path: '/pizzatable',
          icon: <FaIcons.FaPizzaSlice/>
        },
        {
          title: 'Desserts',
          path: '/desserttable',
          icon: <RiIcons.RiCake3Fill />
        }
      ]
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />
    }
  ];