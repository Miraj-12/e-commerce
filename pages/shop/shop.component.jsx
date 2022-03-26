import { React, Component } from 'react'
import Shop_Data from './shop.data'
import CollectionPreview from '../../component/collections/collections.preview'

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: Shop_Data
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCOllectionProps }) => (
                        <CollectionPreview key={id} {...otherCOllectionProps} />
                    ))};
            </div>
        )
    }
}
export default ShopPage 