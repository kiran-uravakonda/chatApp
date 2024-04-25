import toast from "react-hot-toast";
const useSignup=()=>{
    let signup=async({fullName,username,password,confirmPassword,gender})=>{
        let success=handleErrors({fullName,username,password,confirmPassword,gender})
        if(!success) return;

        try{
            const res=await fetch('/api/signup',
            {
                method:'POST',
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify({fullName,username,password,confirmPassword,gender})
            }
           )

           const data=await res.json();
           console.log(data)
        }
        catch (error)
        {
            console.log(error)
            toast.error("error occured",error.message)
        }



    }

  

    return {signup};
}


export default useSignup;


const handleErrors=({fullName,username,password,confirmPassword,gender})=>{
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("please fill all fields")
        return false
    }

    if(password!==confirmPassword){
        toast.error("passwords doesn't match")
        return false
    }

    if(password.length<6){
        toast.error("password shoud contain atleast 6 characters")
        return false
    }
  return true
}