async function signup(e) {
  e.preventDefault()
  const email = document.querySelector('#signupEmail')
  const password = document.querySelector('#myInput1')
  try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    await result.user.updateProfile({
      displayName: "User"
    })
    await result.user.sendEmailVerification()
    console.log(result)
    alert("you are registered")
    M.toast({ html: `welcome ${result.user.email}`, classes: 'rounded' })
  }
  catch (err) {
    console.log(err)
    alert("try again")
    M.toast({ html: err.message, classes: 'rounded' })
  }
  verificationSend();
  window.location = "./login.html"
}

async function login(e) {
  e.preventDefault()
  const email = document.querySelector('#loginEmail')
  const password = document.querySelector('#myInput')
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    window.location="./home.html"
  }
  catch (err) {
    console.log(err)
    alert("try again")
  }
  email.value = ""
  email.password = ""
}


function verificationSend() {

  const auth = getAuth();
  sendEmailVerification(auth.currentUser)
    .then(() => {
      window.location="../index.html"
    });
}