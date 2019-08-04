// use playerX and playerY to place player at that location
import React from 'react';
import ReactDOM from 'react-dom';

export default class DungeonGame extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Interaction />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Dungeon Game</h1>    
            </div>
        );
    }
}

class Interaction extends React.Component {
    constructor(props) {
        super(props);
        this.playerUp = this.playerUp.bind(this);
        this.playerDown = this.playerDown.bind(this);
        this.playerLeft = this.playerLeft.bind(this);
        this.playerRight = this.playerRight.bind(this);
        this.playerUse = this.playerUse.bind(this);
        this.generateRoom = this.generateRoom.bind(this);
        this.state = {
            playerX: 1,
            playerY: 1,
            roomX: 4,
            roomY: 4
        }
    }
    collisionCheck(player_pos, new_player_pos, wall_x, wall_y) {
        // Returns false if player will collide
        console.log(player_pos, new_player_pos, wall_x, wall_y);
    }
    playerUp() {
        this.setState((previousState) => {
            return {
                playerY: previousState.playerY - 1 
            };
        });
        console.log("up");
        console.log(generateRoom.roomArr);
    }
    playerDown() {
        console.log("down");
        this.setState((previousState) => {
            return {
                playerY: previousState.playerY + 1 
            };
        });
    }
    playerLeft() {
        console.log("left");
        this.setState((previousState) => {
            return {
                playerX: previousState.playerX - 1 
            };
        });
    }
    playerRight() {
        console.log("right");
        this.setState((previousState) => {
            return {
                playerX: previousState.playerX + 1 
            };
        });
    }
    playerUse() {
        console.log("use");
    }
    updateRoom() {
        const rW = this.state.roomX;
        const rH = this.state.roomY;
        let roomArr = [];
        let roomSegment = "";
        for (var j = 0; j < rH; j++) {
            for (var i = 0; i < rW; i++) {
                if (i === this.state.playerX && j === this.state.playerY) {
                    roomSegment += "@";
                } 
                else if (i === 0 || i === rW - 1 || j === 0 || j === rH - 1) {
                    roomSegment += "#";
                } else {
                    roomSegment += ".";
                }
            }
            roomArr.push(roomSegment);
            roomSegment = "";
        }
        for (var i = 0; i < roomArr.length; i++) {
            console.log(roomArr[i]);
        }
    }
    generateRoom() {
        
    }

    render() {
        return (
            <div>
                <p>X: {this.state.playerX}</p>
                <p>Y: {this.state.playerY}</p>
                <button onClick={this.playerUp}>up</button>
                <button onClick={this.playerDown}>down</button>
                <button onClick={this.playerLeft}>left</button>
                <button onClick={this.playerRight}>right</button>
                <button onClick={this.playerUse}>use</button>
                <button onClick={this.generateRoom}>gen</button>
            </div>
        );
    }
}




ReactDOM.render(<DungeonGame />, document.getElementById("app"));