import React from 'react'

function ServiceItem(props) {
  return (
    <div type="button" className='shadow-2xl bg-red-300 rounded-xl text-center'>
            <img src={props.img} alt="" />
            <div className='p-4'>
                <h1 className='font-bold text-xl'>{props.title}</h1>
                {/*<p className='my-1'>{props.desk}</p>*/}
              
            </div>

        </div>
  )
}

export default ServiceItem