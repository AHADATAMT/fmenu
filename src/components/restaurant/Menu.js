import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: null,
            menu: this.props.menu
        }

    }
    remove_dish = (dish) => {
        let token = sessionStorage.getItem('token');

        return fetch('http://localhost:5000/restaurant/delete_dish/' + dish.id, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`
            }
        }).then((response) => {
            console.log(response)
            response.json().then((body) => {
                console.log(body)
                if (body.success) {
                    let current_menu = [...this.state.menu];
                    let indexOfDish = current_menu.indexOf(dish)
                    delete current_menu[indexOfDish];
                    this.setState({
                        menu: [...current_menu]
                    })
                }
            });
        });
    }
    render() {
        return (
            <div>
                <h3>Menu</h3>
                {this.state.menu.map(dish => {
                    console.log(dish)
                    if (dish !== undefined)
                        return (<div>
                            <img src={dish.img_url} />
                            <p>Name: {dish.showname}</p>
                            <p>Price: {dish.price}</p>
                            <p><a href="#" onClick={() => { this.remove_dish(dish) }}>Remove</a></p>
                        </div>)
                })
                }
            </div >
        )
    }
}
