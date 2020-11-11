import { AlternateEmail } from '@material-ui/icons';
import { createStore } from 'redux';
import firebase from '../../confiq/firebase'
import createBrowserHistory from "history/createBrowserHistory"


// const set_data=()=>{
//     return(dispatch)=>{
//         console.log("Running")
//         dispatch({
//             type:"SETDATA",
//             user:{name:"ammara",email:"ammarasaleem@gmail.com"}
//         })
//         dispatch({type:"SETDATA"})
//     }
// }

  

const facebook_login = (history) => {
    //console.log("facebook login")
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                let create_user = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid
                }
                console.log("user=>",create_user )
                firebase.database().ref('/').child(`user/${user.uid}`).set(create_user)
                    .then(() => {
                        alert("user login successfully")
                        const history = createBrowserHistory({
                            forceRefresh: true
                            })
                        
                        history.push('/login');
                    })

      
      
      
      }).catch(function (error) {

                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage)



                    });

    }


}


export default facebook_login

