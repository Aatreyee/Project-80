import React , {Component} from 'react';
import{createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSidebarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
},
  {
     contentComponent:CustomSideBarMenu
  },
  {
      initialRouteName:'Home'
})

