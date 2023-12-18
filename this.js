let person11={
    user:"manjeet",
    mobile:9783266449,
    email:"manjeet@gmail.com",
    getData:function(gender,hobby){
         console.log(`${this.user} ${this.email} ${this.mobile} ${gender} ${hobby}`)
    }
  }
  let person12={
    user:"gourav",
    mobile:6367450036,
    email:"gourav@gmail.com"
  }
  
  person11.getData.call(person12,'male','programming')
  person11.getData.apply(person12,['male','programming'])
  person11.getData.bind(person12,'male','programming')()
  
  
