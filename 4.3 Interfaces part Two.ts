// abstactとinterfaceの差
// 抽象クラスはJSに変換される時にそのまま残るが、interfaceは消えるため、速度的にも重さ的にも良い。
// 使い方は両方クラスの形を先に宣言して教えてくれる
// interfaceを使う時に問題点一つがprivateを使用できないこと
abstract class TestAbs {
    constructor(
        protected readonly firstName: string,
        protected readonly lastName: string
    ) { }
    abstract sayHi(name: string): string
    abstract fullName(): string
}

class AbsClass extends TestAbs {
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    sayHi(name: string): string {
        return `Hi ${name} . My ${this.fullName()}`
    }
}

interface TestInter {
    firstName: string,
    lastName: string,
    sayHi(name: string): string
    fullName(): string
}

interface TestInter2 {
    health: number
}

class InterClass implements TestInter, TestInter2 {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) { }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string): string {
        return `Hi ${name} . My ${this.fullName()}`
    }
}

function makeUser(user: TestInter): TestInter {
    return user
}

makeUser ({
    firstName: 'John',
    lastName: 'Doe',
    fullName: () => 'John Doe',
    sayHi: (name: string) => `Hi ${name}`
})