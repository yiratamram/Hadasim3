export const validatememberID = (event) => {
    var validID = /^([1-9]|[2-8]\d|90)\d{7}$/;
    if(!event.target.value){
      setErrors({ ...errors, IdUser: "שדה חובה!" });
    }
    else if (event.target.value.match(validID)) {
      setErrors({ ...errors, IdUser: "תקין!" });
      // setUser({ ...user, IdUser: event.target.value })
    }
    else {
      setErrors({ ...errors, IdUser: 'ת.ז שגויה!!' })
     
    }
    setUser({ ...user, IdUser: event.target.value })
  }
