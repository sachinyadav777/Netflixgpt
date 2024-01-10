
export const handleName = (name)=>{
    // console.log(name);
    const isname = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if (!isname) return "Name is not valid";
    return null;
}

export const handlePassword = (password)=>{
    // console.log(password);
    const ispassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!ispassword) return "Password is not valid";
    return null;
}