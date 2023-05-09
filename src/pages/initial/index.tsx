import React from 'react';
import { Check, CheckFat, PaperPlaneTilt } from '@phosphor-icons/react';

import { FaCheck } from 'react-icons/fa';

// redux
import { useSelector } from 'react-redux';

interface StateUser {
  user: {
    name: 'string';
    isLogged: boolean;
  }
}

export default function Initial() {
  const arrayWords = [
    'Character animation',
    'Anticipation',
    'Inertia',
    'Staging',
    'Cinema 4D',
    'Rigging',
    'Unreal ControlRig',
    'Unreal Blueprint',
    'Unreal Niagara',
    'Unreal Material Editor',
    'Blender',
    'Maya',
    'Houdini',
    'PBR',
    'English',

  ]
  const [checkeds, setCheckeds] = React.useState<string[]>([]);

  const handleCheckInputs = (e: any) => {
    const icon = document.querySelector(`#${e.target.id}-icon`);
    icon?.classList.toggle('hidden')

    console.log(`#${e.target.id}-icon`)
  }

  return (
    <main className='w-full'>
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='bg-green-app text-black-app p-2 font-bold px-4 rounded text-lg'>PDF Reader</span>
          {/* <h1 className='text-3xl'>Olá Renata</h1> */}
        </div>
        <div className='flex items-center mt-28 justify-center 2xl:justify-between flex-wrap '>
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
          <div className='my-10 max-w-2xl bg-green-app border rounded-3xl  border-solid border-black-app drop-shadow-3xl'>
            <div className='flex flex-col items-center m-5'>
              <h1 className='text-lg sm:text-3xl font-bold bg-white p-1 px-5 rounded-lg'>Selecione as palavras-chave:</h1>
              <section className='grid grid-cols-3 sm:grid-cols-4 my-10 w-full'>
                {arrayWords.map((item, i) => (
                  <label onChange={handleCheckInputs} key={`${item}-${i}`} className='flex gap-2 items-center' htmlFor={item.includes(' ') ? item.replace(/\s/g, "") : item}>
                    <div className='flex relative'>
                      <input className='appearance-none h-4 w-4 border rounded border-black-app bg-white' type='checkbox' id={item.includes(' ') ? item.replace(/\s/g, "") : item} />
                      <span className='absolute left-0.5'>
                        <FaCheck
                          color='#191A23'
                          className={`w-5 hidden`}
                          id={item.includes(' ') ? item.replace(/\s/g, "")+'-icon' : `${item}-icon`}
                        />
                      </span>
                    </div>
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
                <input accept='.pdf' className='hidden' id='inputFilesPDF' type='file' multiple onChange={(e: any) => console.log(e.target.files)} />
              </section>
              <button type='submit' className='bg-black-app text-white py-3 px-5 mt-5 font-bold text-xl rounded'>Analisar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}