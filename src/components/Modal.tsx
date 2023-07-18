import './modal.css';

function Modal() {
  return (
    <>
      <div className='modal'>
        <div className='header'>
          X Hóspedes
        </div>
        <div className='main'>
          <p className='room-one'>Quarto 1</p>
          <div className='container-adult'>
            <div className='container-p-adult'>
              <p>Adultos</p>
            </div>
            <div className='container-amount-adult'>
              <div className='min-adult'>-</div>
              1
              <div className='max-adult'>+</div>
            </div>
          </div>
          <div className='container-children'>
            <div className='container-p-children'>
              <p>Adultos</p>
            </div>
            <div className='container-amount-children'>
              <div className='min-children'>-</div>
              1
              <div className='max-children'>+</div>
            </div>
          </div>
        </div>
        <button>Ok</button>
      </div>
    </>
  );

}

export default Modal;