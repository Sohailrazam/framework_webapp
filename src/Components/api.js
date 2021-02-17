
// http://127.0.0.1:8000
// https://instrumentum.herokuapp.com
const ROOT_URL = "https://instrumentum.herokuapp.com";

export default class APIService {

    static LoginUser(body) {
        return fetch(`${ROOT_URL}/auth/login/`, {
          'method':'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json',
            }, 
            body:JSON.stringify(body)
  
        })
      }
      
      static RegisterUser(body) {

        return fetch(`${ROOT_URL}/auth/registration/`, {
          'method':'POST',
          headers: {
            'Accept': 'application/json',
              'Content-Type':'application/json',

            }, 
            body:JSON.stringify(body)
  
        })
  
      }

      static ForgetPasswordUser(uid,token ,body) {
        return fetch(`${ROOT_URL}/auth/password-reset/confirm/${uid}/${token}`, {
          'method':'POST',
          headers: {
            'Accept': 'application/json',
              'Content-Type':'application/json',

            }, 
            body:JSON.stringify(body)
        })
      }

      static ResetPasswordUser(body) {
        return fetch(`${ROOT_URL}/auth/password/reset/`, {
          'method':'POST',
          headers: {
            'Accept': 'application/json',
              'Content-Type':'application/json',

            }, 
            body:JSON.stringify(body)
        })
      }

      static CurrentUser(token) {
        return fetch(`${ROOT_URL}/current_user`, {
          'method':'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json',
              'Authorization':`Token ${token}`
            }, 
        })
      }

      static CurrentPost() {
        return fetch(`${ROOT_URL}/latest_post`, {
          'method':'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json',
            }, 
        })
      }

      static Posts() {
        return fetch(`${ROOT_URL}/post/`, {
          'method':'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json',
              // 'Authorization':`Token ${token}`
            }, 
        })
      }
      static InsertPost(body) {
        return fetch(`${ROOT_URL}/post/`, {
          'method':'POST',
          headers: {
              'Content-Type':'application/json',
              // 'Authorization':`Token ${token}` 
            }, 
            body:JSON.stringify(body)
        })
      }
      static detailPost(id) {
        return fetch(`${ROOT_URL}/post/${id}`, {
          'method':'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type':'application/json',
              // 'Authorization':`Token ${token}`
            }, 
        })
      }


      static UpdatePost(id, body) {
        return fetch(`${ROOT_URL}/post/${id}/`, {
           'method':'PUT',
           headers: {
               'Content-Type':'application/json',
             }, 
             body:JSON.stringify(body)
   
        })
       }

       static DeletePost(id) {
        return fetch(`${ROOT_URL}/post/${id}/`, {
          'method':'DELETE',
          headers: {
              'Content-Type':'application/json',
          }
       })
      }
   
}
