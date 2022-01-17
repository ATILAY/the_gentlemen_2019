import React, {useEffect, useState} from 'react'
import {cardChangerTypes} from '../constants'

console.log('cardChangerType', cardChangerTypes)

export default function CardManupilation({cardChangerType}) {
    const [cardWrapperWidth, setCardWrapperWidth] = useState(500)
    const [holderName, setholderName] = useState('')
    const [holderCardNumber, setholderCardNumber] = useState('')

    //previewers
    let creditCardPreview = '';

    //handlers
    const handleCreditCard = e => {
        const temp = (e.target.value).replace(/[^\d]/g, '')
        // if (temp.length % 5 === 0){
        //     temp = temp + ' ';
        // }

        if (temp.length === 5) {
            temp = temp.split("")
            temp.splice(5,0, ' ')
            temp = temp.join('')        
        }

        setholderCardNumber(temp)           
    }

    useEffect(() => {
        function handleResize() {
            // console.log('width:', window.innerWidth)

            const homeElemWidth = document.getElementById('home').offsetWidth;

            
            if(cardWrapperWidth <= 500){
                setCardWrapperWidth(homeElemWidth + 2)
                console.log('homeElemWidth',homeElemWidth,'typeof homeElemWidth', typeof homeElemWidth);
            }
        }
        
        window.addEventListener('resize', handleResize)
        
        return _ => {
        window.removeEventListener('resize', handleResize)
        }
    });


    return (
        <div className='card-man-wrapper' 
            style={{width:cardWrapperWidth, 
                display: cardChangerType ? 'block' : 'none'}}
        >
            <div className='card-gray-opaque'>
                qweqweqweqwe
            </div>
            <div className='card-changer-wrapper'>
                <div className='card-changer-inner-wrapper'>
                    <div className='card-changer-container flex flex-col'>

                    <div className='close'>X</div>
                    <div className='title-container'>
                    <h1 className='card-changer-title-text'>
                        {(cardChangerType === cardChangerTypes.adding ?
                        'Add your card details':
                        'Edit your card'
                        )}
                    </h1>
                    </div>
                    <div className='card-container'>kjart buraya gelicek</div>
                    <div className='input flex flex-col'>
                        <label className='font_size_10' htmlFor='holder-name'>Name in card</label>
                        <input id="holder-name" value={holderName} onChange={e => setholderName(e.target.value)}/>
                    </div>
                    <div className='input flex flex-col'>
                        <label className='font_size_10' htmlFor='holder-card-number'>Card number</label>
                        <input id="holder-card-number"
                        //  pattern="[0-9\s]{13,19}"
                        //  autocomplete="cc-number"
                        //  placeholder="xxxx xxxx xxxx xxxx"
                        // type="tel" 
                        // inputmode="numeric" 
                        // pattern="[0-9\s]{13,19}" 
                        // autocomplete="cc-number" 
                        // maxlength="19" 
                        placeholder="xxxx xxxx xxxx xxxx"
                        value={holderCardNumber} 
                        onChange={e => handleCreditCard(e)}/>
                    </div>
                    <div className='input flex flex-col'>
                        <label className='font_size_10' htmlFor='holder-name'>Name in card</label>
                        <input id="holder-name" value={holderName} onChange={e => setholderName(e.target.value)}/>
                    </div>
                    <div className='input flex flex-col'>
                        <label className='font_size_10' htmlFor='holder-name'>Name in card</label>
                        <input id="holder-name" value={holderName} onChange={e => setholderName(e.target.value)}/>
                    </div>
                    <div className='button-container'>buttons</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
