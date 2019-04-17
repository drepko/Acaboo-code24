import React from'react'

export default function Cart(props) {

    const total = props.selectedCourses.map(course => course.price).reduce((a,b) => a + b, 0)
    const subtotal = Number.isInteger(total) ? total + `,-` : total.toFixed(2).toString().replace(".", ",")

    return (
        <div>
            <h3>Cart</h3>
                {props.selectedCourses.map(course => <p>{course.name} €{course.price.toFixed(2).toString().replace(".", ",")}</p>)}
            <h3>Subtotal: €{subtotal}</h3>
        </div>
    )
}

