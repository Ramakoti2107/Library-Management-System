import axios from 'axios'

export default function Login({store}) {

    function handleSubmit(){
        console.log({
            un: document.getElementById("idun").value,
            pw: document.getElementsByName("pw")[0].value
        })
        axios.post('http://localhost:8081/check', {
            un: document.getElementById("idun").value,
            pw: document.getElementsByName("pw")[0].value
        }).then((response) => {
            console.log(response.data);
            if(response.data != "fail"){
                store.dispatch({"type":"login", "data":{"un":response.data.name, "Role":response.data.Role}})
            }
            else{
                alert("Invalid Username or Password!!");
            }
        })
    }
    function handleMouseOver() {
        document.getElementById("idlogin").style.boxShadow = "10px 10px 15px grey";
    }
    function handleMouseLeave() {
        document.getElementById("idlogin").style.boxShadow = "0px 0px 0px grey";
    }
    return(
        <div id ="idlogin" className="login-form" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <p style={{ textShadow: "1px 2px 2px red, -1px -2px 2px yellow", fontSize: "25px" }}>Login Page</p><br/>
            username: <input type="text" name="un" id="idun" /> <br/><br/>
            password: <input type="password" name="pw" id="idpw" /> <br/><br/>
            <button onClick={handleSubmit}> Login </button>
        </div>
    );
}