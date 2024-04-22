import React from 'react'
import Data from "./../../Json/data.json"
import { useParams } from 'react-router-dom';


export default function DestinationChoix() {

    const {id} = useParams();
    const product = Data.destinations[id];
    console.log(product);

    return (
        <div className='flex justify-center items-center'>
            
        </div>
    )

}
