import React, {useState} from 'react'
import cardBgImg from '../resources/card-background-shape.svg'
import { ReactComponent as VisaSvg } from '../resources/visa-logo.svg';
import { ReactComponent as MasterSvg } from '../resources/mastercard-logo.svg';


const VISA = 'visa'

// CCN means credit card network
export default function SingleCard({CCN='visa'}) {
    const isVisa = CCN === VISA

    return (
        <div 
        className='single-card-wrapper flex flex-col space-between' 
        style={{ backgroundImage: `url(${cardBgImg})` }}>
            <div className='card-head flex flex-row space-between'>
                <div className='logo-wrapper'>
                    {isVisa ? (<VisaSvg/>): (<MasterSvg/>)}
                </div>

                <div className='flex flex-row'>
                <div className='cvc-wrapper'>
                    <div className='need-to-be-grey font-size-14 text-center'>CVC</div>
                    <div className='data-text'>009</div>
                </div>
                <div className='expires-wrapper'>
                    <div className='need-to-be-grey font-size-14 text-center'>EXPIRES</div>
                    <div className='data-text'>08/21</div>
                </div>
                </div>
            </div>

            <div className='card-bottom flex flex-col'>
                    <div className='card-person-name data-text mb-8'>
                    ATILAY MAYADAG
                    </div>
                <div className='card-number-and-edit flex flex-row space-between'>
                    <div className='card-number-wrapper data-text need-to-be-grey'>
                        5544 3322 1234 1234
                    </div>
                    <div className='card-edit-wrapper need-to-be-grey' >
                        edit
                    </div>
                </div>
            </div>
        </div>
    )
}
