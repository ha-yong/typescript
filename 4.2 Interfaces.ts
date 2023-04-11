// interfaceはobjectだけ使用が可能
// typeは種類に関係ずにどんなタイプでも使用可能
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

type Players = {
    nickName:string,
    team:Team
    health:Health
}

interface Person{
    nickName:string,
    team:Team
    health:Health
}

const yong : Players = {
    nickName: "ha",
    team: "red",
    health: 1
}

const deok : Person = {
    nickName: "ha",
    team: "red",
    health: 1
}
