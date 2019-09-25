import React from 'react'
import {  Header,  Modal } from 'semantic-ui-react'
import GoogleMap from "../GoogleMap";


const ModalMap = ({openModal,modalMapData,closeModal}) => {
  const style = {
    width: '100%',
    height: '80vh'
  }
  
  return (
    <Modal open={openModal}
    size="small"
    closeIcon={true}
    onClose={() => {
      closeModal(false);
    }}
    >
      <Modal.Header>{modalMapData.title}({modalMapData.address})</Modal.Header>
      <Modal.Content >
          <GoogleMap
           style={style}
           center={modalMapData.coords}
           address={modalMapData.address} 
          />
      </Modal.Content>
    </Modal>
  )
}





export default ModalMap
