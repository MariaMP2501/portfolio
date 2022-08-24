import React from 'react'
import {NavigationDots, SocialMedia } from '../components';
/*HOC = Higher order component*/
const AppWrap = (Component, idName, classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
            <Component />
            <div className="copyright">
                <p className="p-text">@2022 MMP</p>
                <p className="p-text">Tous droits réservés</p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap;
