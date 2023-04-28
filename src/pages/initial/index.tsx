import { PaperPlaneTilt } from '@phosphor-icons/react';
import React from 'react';

export default function Initial() {
  const arrayWords = ['React', 'Node', 'vfx', 'React', 'Node', 'vfx', 'React', 'Node', 'vfx', 'React', 'Node', 'vfx', 'React', 'Node', 'vfx',]
  return (
    <main className='w-full'>
      <div className=''>
        <span className='bg-green-app text-black-app p-2 font-bold px-4 rounded text-lg'>PDF Reader</span>
        <div className='flex items-center mt-28 justify-center xl:justify-between flex-wrap '>
          {/* <div className='flex items-center mt-28 justify-between flex-wrap bg-red-500'> */}
          <div className=' max-w-xl'>
            <h1 className='text-4xl font-medium font-space'>
              Esta é uma simples aplicação onde você pode coletar dados baseados em palavras chaves em arquivos PDF.
            </h1>
            <p className='text-lg mt-5'>Nela você vai poder adicionar arquivos em formato PDF, setar palavras chaves e obter um resultado
              de porcentagem baseado no documento que mais tem compatibilidade com as palavras, facilitando assim, a sua
              busca por informações dentro daqueles documentos.
            </p>
          </div>
          <div className='my-10 bg-green-app border rounded-3xl 2xl:mr-60 border-solid border-black-app drop-shadow-3xl'>
            <div className='flex flex-col items-center m-5'>
              <h1 className='text-lg sm:text-3xl font-bold bg-white p-1 px-5 rounded-lg'>Selecione as palavras chave:</h1>
              <section className='grid grid-cols-3 sm:grid-cols-4 my-10 w-full'>
                {arrayWords.map((item) => (
                  <label className='flex gap-2 items-center' htmlFor={item}>
                    <input type='checkbox' id={item} />
                    <p>{item}</p>
                  </label>
                ))}
              </section>
              <section className='w-full flex flex-col items-center'>
                <h2 className='text-lg font-bold'>Selecione os arquivos para leitura</h2>
                {/* <div className='bg-white w-full h-28'></div> */}
                <label htmlFor='inputFilesPDF' className='flex justify-between items-center w-full bg-white  h-12 rounded-md'>
                  <p className='text-gray-500 ml-5'>Selecione os arquivos</p>
                  <PaperPlaneTilt className='mr-2 ' color='#191A23' size={32} />
                </label>
                  <input className='hidden' id='inputFilesPDF' type='file' />
              </section>
              <button type='submit' className='bg-black-app text-white py-3 px-5 mt-5 font-bold text-xl rounded'>Analisar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}