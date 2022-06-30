import React from 'react';
import './details.scss';
import { motion } from 'framer-motion';
import { Context } from '../../contexts/Context';
import { useContext } from 'react';

const Details = () => {
    const { detailsModal, setDetailsModal } = useContext(Context);
  return (
    <div>
        <div className={`details-container`}>
            <motion.div
                className="details-box"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <h1 className="title-details">Detalhes</h1>
               
            </motion.div>
            <div className="bg-details" onClick={()=> setDetailsModal(!detailsModal)}></div>
        </div>
    </div>
  )
}

export default Details