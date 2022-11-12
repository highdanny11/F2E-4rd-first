
const num : number = 20 + 20 
export const test = (str : string):string => {
  // 99999
  return `${str}測試${num}`
}
type PersonalInfo = {
  name:string,
  age:number,
  interest: string[]
}
type PersonalInfoOrNull = PersonalInfo | null
let info : PersonalInfoOrNull = {
  name: 'Maxwell',
  age: 18,
  interest: ['drawing', 'programming']
}

type ExtendedPersonalInfo = {
  readonly [Key in keyof PersonalInfo]: PersonalInfo[Key]
} 
// type ExtendedPersonalInfo = PersonalInfo & { email: string}

const aaa : ExtendedPersonalInfo = {
  name: 'Maxwell',
  age: 18,
  interest: ['drawing', 'programming'],
  // email:'123'
}


type UserAccount = {
  username:string,
  password:string,
  savings:number
}
// const Users:UserAccount[] = [
//   { username:'Maxwell', password: 'HA&HED', savings: 1000,},
//   { username:'Martin', password: 'hA&HEd', savings: 2000,},
//   { username:'Mike', password: 'haSHeD', savings: 3000,},
// ]

class  CashMachine {
  private currentUser?:UserAccount
  private static Users:UserAccount[] = [
    { username:'Maxwell', password: 'HA&HED', savings: 1000,},
    { username:'Martin', password: 'hA&HEd', savings: 2000,},
    { username:'Mike', password: 'haSHeD', savings: 3000,},
  ]
  login(username: string, password:string){
    for(let i = 0 ; i < CashMachine.Users.length; i+=1) {
      const user = CashMachine.Users[i]
      if (user.username === username) {
        if(user.password !== password) {
          throw new Error('Wrong password')
        }
        this.currentUser = user
        return
      }
    }
    throw new Error('User Not Found')
  }
  logout() {
    this.currentUser = undefined
  }
  deposit(amount : number) {
    if(this.currentUser === undefined) {
      throw new Error('User have not login in')
    }
    this.currentUser.savings += amount
  }
  withdraw(amount:number) {
    if(this.currentUser === undefined) {
      throw new Error('User have not login in')
    }
    if(this.currentUser.savings < amount) {
      throw new Error('Savings is not enough for withdrawall')
    }
    this.currentUser.savings -= amount
  }
  // 可以改成 get
  get accountInfo() {
    if(this.currentUser === undefined) {
      throw new Error('User have not login in')
    }
    const { username, savings } = this.currentUser
    return `${username} has savings: \$${savings}`
  }
  // 可以改成 set
  set username(input:string) {
    if(this.currentUser === undefined) {
      throw new Error('User have not login in')
    }
    this.currentUser.username = input
  }
}

const machine = new CashMachine()
machine.login('Maxwell','HA&HED')
console.log(machine.accountInfo)
console.log(machine.username = 'danny')