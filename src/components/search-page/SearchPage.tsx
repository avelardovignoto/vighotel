import { ChangeEvent, FormEvent, useState } from 'react'
import './searchPage.css';

const url = 'http://localhost:8080/api/v1/rooms';

function SearchPage() {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  function changeCheckInDate(newCheckInDate: string) {
    setCheckInDate(new Date(newCheckInDate));
  }

  function changeCheckOutDate(newCheckOutDate: string) {
    setCheckOutDate(new Date(newCheckOutDate));
  }

  function roomsSearch(searchParams: SearchParamsType) {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(searchParams)
    })
    .then(response => response.json())
    .then(data => handleResponse(data))
    .catch(error => console.log(error))
    .finally(() => console.log('Request finished'));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const searchParams: SearchParamsType = {
      checkInDate,
      checkOutDate
    }

    roomsSearch(searchParams);
  }

  function handleResponse(data: any) {
    localStorage.setItem("rooms", JSON.stringify(data))
    location.href = "/results"
  }

  return (
    <main className="main-search-page">
      <form onSubmit={handleSubmit}>
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => changeCheckInDate(e?.target?.value)} type="date" required autoComplete="off" />
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => changeCheckOutDate(e?.target?.value)} type="date" required autoComplete="off" />
        <input className="btn" type="submit" value="Pesquisar" />
      </form>
    </main>
  );
}

interface SearchParamsType {
  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;
}

export default SearchPage
