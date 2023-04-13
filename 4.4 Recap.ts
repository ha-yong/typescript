// typeとinterfaceはobjectの形を教えてあげるためにつかう
// interfaceの全ての機能はtypeで使える
// typeは再度開いて新しい属性を追加できないがinterfaceは拡張可能。
type Recap = {
    name:string
}
type Recapp = Recap &{
    lastName:string
}
const playerA: Recapp ={
    name:"ha",
    lastName:"kim"
}

interface Recap2 {
    name:string
}
interface Recapp2 extends Recapp{
    lastName:string
}
const playerB: Recapp2 ={
    name:"ha",
    lastName:"kim"
}

// typeとinterfaceの使いかたは一緒
type Recap3 = {
    firstName:string
}

interface Recapp3{
    firstName:string
}

class RecapClass implements Recap3{
    constructor(public firstName:string){}
}

class RecapClass2 implements Recapp3{
    constructor(public firstName:string){}
}