import React from 'react';

// redux
import { useDispatch } from 'react-redux';
import { changeUser, logout } from '@/redux/userSlice';

// pdfReader

// PDF

export default function teste() {
  const [name, setName] = React.useState<string>('');

  const dispatch = useDispatch()

  const handleClickSave = () => {
    dispatch(changeUser(name))
  }

  const handleClickDelete = () => {
    dispatch(logout())
  }

  return (
    <>
      <div>olá mundo</div>
      <input className='border border-black' onChange={(e: any) => setName(e.target.value)} />
      <button className='bg-green-500 p-2 m-2 rounded text-white font-semibold' onClick={handleClickSave}>Salvar Estado</button>
      <button className='bg-red-500 p-2 m-2 rounded text-white font-semibold' onClick={handleClickDelete}>Deletar Estado</button>
    </>
    // <input onChange={(e: any) => setpdf(URL.createObjectURL(e.target.files[0]))} type='file' accept='.pdf' />
  )
}