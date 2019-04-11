import { login } from 'ducks/app';
import { submit } from 'ducks/login'
import { logout } from 'ducks/app';

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    // console.log('getFirebase', getFirebase);
    // console.log('dispatch', dispatch);
    console.log('credentials', credentials);
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.username, credentials.password)
      .then(() => {
        console.log('khi đăng nhập thành công chưa qua redux');
        dispatch({ type: "LOGIN_SUCCESS" });
        dispatch(submit(credentials));
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  // console.log("chạy tới đây nha");
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
        dispatch(logout());
      });
  };
};
export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
