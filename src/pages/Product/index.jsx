import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './style.css';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            loading: true,
            data: {},
        };
    }

    componentDidMount(){
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ])

        .then(([item, description]) => {
            console.log(item, description)

            this.setState({
                data: {
                    ...item.data,
                    description: description.data.plain_text,
                },
                loading: false,
            });

        })
        .catch((err) => {
            console.log(err)
        });
    }

    render () {
        const { data, loading } = this.state;
        const {id, title, price, pictures, seller_address} = data;
        if(loading){
            return (
                <Fragment>
                    Carregando...
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                        <div className="mdl-grid" >
                            <div className="mdl-cell mdl-cell--5-col">
                                <img className="img-product " src={pictures[0].url } alt={data.title}></img>
                            </div>
                            <div className="mdl-cell mdl-cell--7-col">
                                <div>
                                    <div>
                                        <h2> {id}</h2>                                
                                    </div>
                                    <div>
                                        <h3 className="mdl-card__title-text">{title}</h3>
                                    </div>
                                    <div>
                                        <h4>R${price}</h4>                                
                                    </div>
                                    <div>
                                        <h4>{seller_address.city.name}</h4>                                
                                    </div>
                                    <div>
                                        <h4> {seller_address.state.name}</h4>                                
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </Fragment>
            );
        }
    }
}

export default Product;