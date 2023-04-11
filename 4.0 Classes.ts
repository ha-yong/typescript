abstract class User {
    constructor(
        protected firstName: string,
        protected lasNmae: string,
        protected nickName: string
    ) { }
    abstract getNickName(): void

    getFullName() {
        return '${this.firstName} ${this.lastName}'
    }

}

class Player extends User {
    getNickName() {
        console.log(this.nickName)
    }
}

const ha = new Player("ha", "yong", "bob")
ha.getFullName
