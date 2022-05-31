export default function auth() {
    const token =localStorage.getItem('token')
    const header = {
        headers:{
            'auth-token':token            
        }
    }
    if(!token){
        return {
            headers:{
                'auth-token':''            
            }
        }
    }
    return header
}
