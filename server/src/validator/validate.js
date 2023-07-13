const validName=(name)=>{
    let nameArr=name.split(" ");
    if(nameArr.length<2 || nameArr.length>6) return false;
    let nameReg=/^[A-Za-z]+$/;
    for(let i=0;i<nameArr.length;i++){
        if(nameArr[i].length <3) return false;
        if(! nameReg.test(nameArr[i])) return false;
    }
    return true;
}
const validEmail = (email)=> {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/

    return (emailRegex.test(email));
}
const validTitle=(title)=>{
    return (title==="Mr" || title==="Mrs" || title==="Miss");
}

module.exports={validEmail,validName,validTitle}
