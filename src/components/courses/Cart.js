import React from'react'

export default function Cart(props) {

    const total = props.selectedCourses.map(course => course.price).reduce((a,b) => a + b, 0)
    const subtotal = Number.isInteger(total) ? total + `,-` : total.toFixed(2).toString().replace(".", ",")

    return (
        <div className="bg-blue max-width-small padding margin-bottom">
            <p className="text-sm-med-white">Cart</p>
            {props.selectedCourses
                .map(course => (<div className="main-row">
                    <p className="text-sm-white">{course.name}</p>
                    <p className="text-sm-white ml-auto">€{course.price.toFixed(2).toString().replace(".", ",")}</p></div>))}
            <div className="main-row">            
                <p className="text-sm-white">Subtotal:&nbsp;&nbsp;</p>
                <p className="text-sm-med-white">€ {subtotal}</p>
                <button className="btn-white-sm ml-auto text-sm-black" onClick={props.checkCurrentUser}>Checkout</button>
            </div>
        </div>
    )
}

// {game.players
//     .map(player => (
//       <TableRow className={users[player.userId].email} key={users[player.userId].id}>
//         <TableCell component="th" scope="row">{users[player.userId].email}</TableCell>
//         <TableCell component="th" scope="row">{player.score}</TableCell>
//       </TableRow>))} 

