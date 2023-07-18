import './main.css';

function Main() {
  return (
    <>
      <main>
        <div className='input-one'>
          <div className='icon'>
            <span className="material-symbols-outlined">
              calendar_month
            </span>
          </div>
          <div className='check-in'>
            <p className='p-title'><i>Check-in</i></p>
            <p className='p-data'>Data</p>
          </div>
        </div>
        <div className='input-two'>
          <div className='icon'>
            <span className="material-symbols-outlined">
              calendar_month
            </span>
          </div>
          <div className='check-in'>
            <p className='p-title'><i>Check-out</i></p>
            <p className='p-data'>Data</p>
          </div>
        </div>
        <div className='input-three'>
          <div className='icon'>
          <span className="material-symbols-outlined">
            person
          </span>
          </div>
          <div className='check-in'>
            <p className='p-title'><i>Hóspede</i></p>
            <p className='p-data'>1 quarto, 2 viajantes</p>
          </div>
        </div>
        <button>Buscar</button>
      </main>
    </>
  );

}

export default Main;