function getPhoneNumber(numbers){

    let phoneNumber = "xxx-xxx-xxxx"

    if (isNaN(numbers) === true) {
        console.log('Not a vaild number, try again')
    } else if(numbers.length != 10) {
        console.log('Not a vaild number, try again')
    } else
    for(let i = 0; i < numbers.length; i++) {
        phoneNumber = phoneNumber.replace('x', numbers[i])
        } 
    return phoneNumber
  }

  console.log(getPhoneNumber('1234567890'))
  console.log(getPhoneNumber('1234asd890'))
  console.log(getPhoneNumber('12345678'))