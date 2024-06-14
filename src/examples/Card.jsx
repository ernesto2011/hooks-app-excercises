import React from 'react'

export const Card = ({id, name, sprites=[]}) => {
  return (
    <section style={{height:200}}>
        <h2 className='texxt-capitalize'>#{id} - {name}</h2>
        <div>
            {
                sprites.map(sprite=>(
                    <img key={sprite} src={sprite} alt={name} />
                ))
            }
        </div>

    </section>
  )
}
