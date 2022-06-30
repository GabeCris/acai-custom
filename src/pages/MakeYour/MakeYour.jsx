import React from 'react';
import './makeyour.scss';
import Button from '../../components/Button/Button';

const MakeYour = () => {
  return (
    <div className='makeyour'>
        <img src="./assets/page/make-your.svg" alt="" className='makeyour_image'/>
        <div className="makeyour_content">
            <h1 className="title-page">
            Eaí, bora montar seu próprio açaí?
            </h1>
            <p className="text">
            Escolha os ingredientes, coberturas, acompanhamentos, recheios, e tudo mais para deixar o açaí do jeitinho que tu gosta!
            </p>
            <Button text="Eu quero" secondary={true} ></Button>
        </div>
    </div>
  )
}

export default MakeYour