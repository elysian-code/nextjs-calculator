
import { ICalc } from '@/app/page'

interface props {
    calc:ICalc
}

export default function history({calc}:props) {
    return (
        <div>
            <div className='w-fit float-right p-2'>
                {calc.history.map((cell,id) =>(
                    < >
                        <p className='p-1 text-sm text-'>{cell.expression}</p>
                        <p className='p-1 '>{cell.value}</p>
                    </>
                ))}
            </div>
        </div>
      )
}
