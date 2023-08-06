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
const matchPass=(pass,pass2)=>{
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
    if(pass !== pass2){
        toast.warn("Password does not match");
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

const validCity=(city)=>{
    if(!city){
        toast.warn("City is mandatory");
        return false;
    }
    const cityArr=city.split(" ");
    let cityReg=/^[A-Za-z]+$/;
    for(let i=0;i<city.length;i++){
        if(!cityReg.test(cityArr[i])){
            toast.warn("Invalid city name");
            return false;
        }
    }
    return true;
}

const regValidate=({title,fullName,city,email,pass,pass2})=>{
    if(!title){
        toast.warn("Select Mr / Miss / Mrs");
        return false;
    };
    return (validEmail(email) && validName(fullName) && matchPass(pass,pass2)) && validCity(city);
}
const loginValidate=({email,pass})=>{
    return (validEmail(email) &&  validPass(pass));
}

const profileValidate=({fullName,city})=>{
    return validName(fullName) && validCity(city);
}

const validBlog=({title,topic,subject,tag,body})=>{
    if(!title || !topic || !subject || !tag || !body){
        toast.warn("All the fields are required!");
        return false;
    } 
    let reg=/^[A-Z a-z]+$/;
    if(! reg.test(topic)) {
        toast.warn("Invalid topic!");
        return false;
    }
    if(! reg.test(subject)) {
        toast.warn("Invalid subject!");
        return false;
    }
    if(body.length<30){
        toast.warn("Blog is too short!");
        return false;
    }
    return true;

}

export {regValidate,loginValidate,profileValidate,validBlog}