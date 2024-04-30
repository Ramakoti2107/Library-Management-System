import axios from "axios";
import { useState } from "react";

export default function Placement() {

    const [result, setResult] = useState(null)

    function handleBorrow(event){
        alert("Congratulations!! you borrowed the book");
    }

    if(result == null){
        axios.get('http://localhost:8081/display').then((response) => {
            console.log(response.data);
            setResult(response.data);
        })
        return(
            <div>
                <b><font>The Books Data is Not There</font></b>
            </div>
        );
    }
    else{
        return(
            <div>
                <b><font></font>The Books Data is Given Below</b> <br/><br/>
                <table border="1" bgcolor="white">
                <tr>
                    <th>Book ID</th>
                    <th>Book Name</th>
                    <th>Genre</th>
                    <th>Author Name</th>
                    <th>Price</th>
                    <th>Borrow Button</th>
                </tr>
                {result.map((user) => {
                    return(
                    <tr>
                        <td>{user.bid}</td>
                        <td>{user.bname}</td>
                        <td>{user.genre}</td>
                        <td>{user.author}</td>
                        <td>{user.price}</td>
                        <td> <button onClick={handleBorrow} book={user.bname}> Borrow </button></td>
                    </tr>
                        
                    );
                })}
                </table>
            </div>
        );
    }
}