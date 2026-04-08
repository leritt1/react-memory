import { useState } from 'react'
import Card from '../Card/Card'
import './Grid.css'


export default function Grid ({images, finishedItems, checkItems}){
    const [visibleItems, setVisibleItems] =useState([]) //массив открытых карточек
    const handleCardClick = (id) => {//функция клика по карточке
        if(finishedItems.includes(id) || visibleItems.includes(id)){ // еслик карточка уже отгадана или открыта, то завершаем выполнение функции
            return
        }
        switch(visibleItems.length){
            case 0: //если не открыта ни одна карточка 
                setVisibleItems([id])
                break
            case 1: //открыта 1 карточка
                setVisibleItems((items)=> [...items, id])
                checkItems(visibleItems[0], id)
                setTimeout(()=>{
                    setVisibleItems([]);
                }, 500)
                break
            default://если открыто уже 2 карточки
                setVisibleItems([])
        }
    }  
    return (
        <div className='grid'>
            {
                images.map((item)=>(
                    <Card 
                    url = {item.url} 
                    key = {item.id} 
                    id = {item.id}
                    isVisible = {visibleItems.includes(item.id)}
                    isFinished = {finishedItems.includes(item.id)}
                    onCardClick = {handleCardClick}
                    />
                ))
            }
        </div>
    )
}