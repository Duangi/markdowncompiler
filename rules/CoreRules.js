class CoreRules {
    constructor(src){
        this.state = new CoreRulesState()
    }
}

class CoreRulesState {
    constructor(src){
        this.src = src
        this.inlineMode = false
    }
}

