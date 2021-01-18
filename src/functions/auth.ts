import { Auth } from 'aws-amplify'

export async function signUpEmailPassword(email: string, password: string){
    try{
        const user = await Auth.signUp({
            username: email,
            password: password,
            attributes:{
                email
            }
        })
        return user
    }
    catch (error){
        return error
    }

}