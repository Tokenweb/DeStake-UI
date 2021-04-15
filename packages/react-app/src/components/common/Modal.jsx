import React from 'react';
import ReactModal from 'react-modal';
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#modal-target')
 
const Modal = ({content, isOpen, close, styles}) => {
  const [modalIsOpen,setIsOpen] = React.useState(isOpen);

  function closeModal(){
    setIsOpen(false);
    close();
  }
 
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={styles}
    >
      {content}
    </ReactModal>
  );
}

export default Modal