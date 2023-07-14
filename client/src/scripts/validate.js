import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validName=(name)=>{
    if(!name){
        toast.warn("Fullname is mandatory");
        return false;
    };
    let nameArr=name.split(" ");
    if(nameArr.length<2 || nameArr.length>6){
        toast.warn("Invalid fullname");
    }
    let nameReg=/^[A-Za-z]+$/;
    for(let i=0;i<nameArr.length;i++){
        if(nameArr[i].length <3){
            toast.warn("Invalid fullname");
            return false
        };
        if(! nameReg.test(nameArr[i])){
            toast.warn("Invalid fullname");
            return false;
        }
    }
    return true;
}

const validEmail = (email)=> {
    if(!email){
        toast.warn("Email is mandatory");
        return false;
    };
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/
    if(! emailRegex.test(email)){
        toast.warn("Invalid email");
        return false;
    }
    return true;
}
const validPass=(pass)=>{
    if(!pass){
        toast.warn("Password is mandatory");
        return false;
    };
    if(pass.length<8){
        toast.warn("Password is too short");
        return false;
    }
    if(pass.length>16){
        toast.warn("Password is too long");
        return false;
    }
    return true;
}

const regValidate=({title,fullName,email,pass})=>{
    if(!title){
        toast.warn("Select Mr / Miss / Mrs");
        return false;
    };
    return (validEmail(email) && validName(fullName) && validPass(pass));
}
const loginValidate=({email,pass})=>{
    return (validEmail(email) &&  validPass(pass));
}

export {regValidate,loginValidate}