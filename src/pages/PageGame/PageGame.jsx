import { Link, Links } from "react-router-dom";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import useGame from "../../components/useGame";
import images from "../../data.json"
import Modal from "../../components/Modal/Modal";

export default function PageGame ()
{
  const { finishedItems,
        stepsCount,
        isWin,
        handleReset,
        checkItems} = useGame(); //импортиурем с деструктуризацией 

    const handleBtnReset = () => {
      handleReset();
      images.sort(()=> Math.random() - 0.5)  //перемешиваем массив
    }
    

    return (
    <>
      <Header />  
      <div className='container'>
        <main>
          <div className="steps">Выполнено шагов: {stepsCount}</div>
          <Grid
            images={images}
            finishedItems={finishedItems}
            checkItems={checkItems}
          />
          {isWin && (
            <Modal>
              <h3 className="modal-caption">Победа!</h3>
              <p className="modal-description">Вы собрались все пары за {stepsCount} шагов</p>
              <button
                className="button modal-button"
                onClick={handleBtnReset}
                type="button">Новая игра
              </button>
            </Modal>
          )}
        </main>
      </div>
    </>
  )
}
