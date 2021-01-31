import React from 'react';
import ItemN from "../itemn/itemn.component";
import './imageblock.style.css';

class ImageBlock extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [
                {
                    id: 1,
                    item_name: 'Backpain',
                    imageUrl: '/assets/backpain.jpg'
                },
                {
                    id: 2,
                    item_name: 'Headache',
                    imageUrl: '/assets/headache.jpg'
                },
                {
                    id: 3,
                    item_name: 'Routine Checkup',
                    imageUrl: '/assets/routine.jpg'
                },
                {
                    id: 4,
                    item_name: 'Surgery',
                    imageUrl: '/assets/surgery.jpg'
                }
            ]
        }
    }

    render() {
        const {items} = this.state;
        return(
            <div className='container'>
            {
                items.map(({id, ...otherCollectionProps}) => (
                    <ItemN key={id} {...otherCollectionProps} />
                ))
            }
        </div>
        );
    }
}


export default ImageBlock;