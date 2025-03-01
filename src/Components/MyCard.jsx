import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const MyCard=()=>{
    const sharedValue = useContext(MyContext);
return <>Hello {sharedValue}, how are you</>;
};
export default MyCard;