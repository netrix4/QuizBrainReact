import React from 'react'

const preguntas_quizz = [
  {
    'pregunta': '¿Qué tipo de animal es la abeja?',
    'respuesta': 'Insecto'
  },
  {
    'pregunta': 'Familia del elefante:',
    'respuesta': 'Paquidermo'
  },
  {
    'pregunta': 'Nombre cientificao del humano promedio:',
    'respuesta': 'Homo-sapiens'
  },
  {
    'pregunta': '¿Cómo se alimentan las plantas?',
    'respuesta': 'Fotosíntesis'
  },
  {
    'pregunta': 'Cierto o falso que existen aves que no pueden volar',
    'respuesta': 'Cierto'
  },
]

const Preguntas = () => (
  <div className ='text-yellow-50 my-[15px]'>
    {preguntas_quizz.map((item)=>(
      <>
      <div className='my-[5px]'>{item.pregunta}</div>
        <input type='text'placeholder={item.respuesta} className='text-[#000]'/>
      </>
      ))
    }
  </div>
)

export {Preguntas};