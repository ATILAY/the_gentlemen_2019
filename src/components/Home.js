import React, {useState} from 'react'
import Cards from './Cards'
import CardManupilation from './CardManupilation'
import {cardChangerTypes} from '../constants'


export default function Home() {
    const [cardChangerType, setCardChangerType] = useState(cardChangerTypes.adding)

    return (
        <div className='home' id="home">
            <div>
                <div className='flex flex-col'>
                    <h1 className='main-title-text'>Your cards</h1>
                    <p className='main-desc-text'>Add, edit, or delete your cards any time</p>
                </div>
            </div>
            <div className='cards'>
                <Cards/>
            </div>
            <div>
                Add new card
            </div>
            <div>
                <CardManupilation cardChangerType={cardChangerType}/>
            </div>
        </div>
    )
}
