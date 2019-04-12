import React from'react'

export default function Cart(props) {

const prices = props.selectedCourses.map(course => course.price)
const total = prices.reduce((a,b) => a + b, 0)

        return (
            
            <div>
                <h3>Cart</h3>
                {props.selectedCourses.map((course) => {
                    return (
                    <p>{course.name} €{course.price},-</p>)
                })}
                <h3>Subtotal: €{total},-</h3>
            </div>
        )
        

    
}

