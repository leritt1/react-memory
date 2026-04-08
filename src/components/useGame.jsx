import { useState } from "react";
import images from "../data.json";

export default function useGame() {
    const [finishedItems, setfinishedItems] = useState([]) //список отгаданных карточек
    const [stepsCount, setstepsCount] =useState(0) //счетчик шагов
    const checkItems = (firstItem, secondItem) => {//функция сравнени двух открытых карточек
        const firstImage = images.find(({id})=>  id == firstItem) //находим первую картинку в массиве
        const secondtImage = images.find(({id})=>  id == secondItem) //находим вторую картинку в массиве
        if(firstImage.url == secondtImage.url) { //если картинки равны и одинаковы
            setfinishedItems((items)=>[...items,firstItem,secondItem]) //добавляем отгаданные карточки в массив отгаданных карточек
        }
        setstepsCount(stepsCount+1)// увеличивает счетчик шагов на 1
    } 
    const handleReset = () => {//функция я сброса игры
        setfinishedItems([])//очиащем массив с отгадаными карточками
        setstepsCount(0)//обнуляем счетчик шагов
    }  

    //проверка конца игры
    const isWin = finishedItems.length == images.length

    return {
        finishedItems,
        stepsCount,
        isWin,
        handleReset,
        checkItems
    }
}