import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

class Carrossel extends Component {
  state = {
    items: [
      { id: 1, 
        title: 'Física', 
        text: ''
      },
      { id: 2, 
        title: 'Psicológica', 
        text: ''
      },
      { id: 3, 
        title: 'Moral', 
        text: ''
      },
      { id: 4, 
        title: 'Sexual', 
        text: ''
      },
      { id: 5, 
        title: 'Patrimonial', 
        text: ''
      },
      
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div key={item.id}>{item.title}{item.text}</div>)}
      </Carousel>
    )
  }
}

export default Carrossel;