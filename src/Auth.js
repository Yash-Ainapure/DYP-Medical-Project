function Auth(){
    const token = localStorage.getItem("dypmeds");
    const date = new Date();
    if (token) {
      const diff = token-date.getTime()
      if (diff > 0) {
        return true;
      } else {
        return false;
      }
    } else {
        return false;
    }

}

export default Auth;