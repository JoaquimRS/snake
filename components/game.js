class GameArea {
    constructor(player, lvl = 0) {       
        this.canvas = document.createElement("canvas");
        this.player = player
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.score = 0
        this.context = this.canvas.getContext("2d");
        this.lvl = lvl
    }

    start() {
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.createScore()
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    
    createScore() {
        let header = document.createElement("header")
        let lvlContainer = document.createElement("div")
        let scoreContainer = document.createElement("div")
        let p_score = document.createElement("p")
        let p_lvl = document.createElement("p")

        scoreContainer.className = "score-container_"+this.player
        lvlContainer.className = "lvl-container_"+this.player
        
        p_score.className = "score_"+this.player
        p_score.id = "score_"+this.player
        p_score.appendChild(document.createTextNode("Score: 0"))

        p_lvl.className = "lvl_"+this.player
        p_lvl.id = "lvl_"+this.player
        p_lvl.appendChild(document.createTextNode("LVL: 1"))

        document.body.insertBefore(header, this.canvas);
        header.appendChild(scoreContainer)
        header.appendChild(lvlContainer)
        scoreContainer.appendChild(p_score)
        lvlContainer.appendChild(p_lvl)

    }

    addScore() {
        this.score += 1
        switch (this.score) {
            case 5:
                this.lvl = 1
                break;
            case 10:
                this.lvl = 2
                break;
            case 15:
                this.lvl = 3
                break;
            case 20:
                this.lvl = 4
                break;
            case 25:
                this.lvl = 5
                break;
            case 30:
                this.lvl = 6
                break;
        }

        document.getElementById("score_"+this.player).innerHTML = "Score: "+this.score
        document.getElementById("lvl_"+this.player).innerHTML = "LVL: "+(this.lvl+1)
    }

}
