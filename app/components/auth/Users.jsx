"use client";
import { useRouter } from "next/navigation";
import React from 'react'

function Users() {
     const router = useRouter();
      const handleClick = () => {
        router.push("/home");
      };
  return (
    <div className=" flex flex-col w-screen h-screen justify-center items-center text-black gap-15 bg-gradient-to-tr from-alabaster to-viridian-light">
    <div className="text-4xl text-center">
      Hoşgeldiniz Hangi Kullanıcı İle Devam Etmek İstersiniz ?
    </div>
    <div className="flex gap-15">
      <button className="user-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="user-button-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <p className="text-xl">Kullanıcı Ekle</p>
      </button>
      <button className="user-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="user-button-icon"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-xl">Kullanıcı adı</p>
      </button>
      <button className="user-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="user-button-icon"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-xl">Kullanıcı adı</p>
      </button>
      <button className="user-button" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="user-button-icon"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-xl">Kullanıcı adı</p>
      </button>
    </div>
  </div>
  )
}

export default Users