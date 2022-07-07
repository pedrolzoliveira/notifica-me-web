import { formataReal } from'../../utils/formataReal';

import { Button } from '../Button';

type ServicePackProps = {
  data: {
    title: string;
    price: number;
    text: string;
    registredEvents: string[];
  }
}

export const ServicePack = ({ data }: ServicePackProps) => {
    return (
        <div className='transition-all border rounded p-4 hover:ring-1 hover:bg-blue-50 cursor-pointer flex flex-col justify-between'>
          <div>
            <h1 className='text-2xl mb-4'>{data.title}</h1>
            <p>{data.text}</p>
            <br/>
            {
              data.registredEvents.length ?
              <>
                <p>Eventos Cadastrados:</p>
                <ul className="list-disc ml-8">
                  {
                    data.registredEvents.map(event => {
                      return <li>{event}</li>
                    })
                  }
                </ul>
              </>
              :
              null
            }
          </div>
          <div className='flex justify-evenly items-center py-2'>
            <p className='text-xl text-gray-700 '>{formataReal(data.price)} /mês</p>
            <Button>Ver Detalhes</Button>
          </div>
        </div>
    )
}