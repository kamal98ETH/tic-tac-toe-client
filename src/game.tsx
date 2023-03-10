import React from 'react';
import io, { Socket } from 'socket.io-client';
import Navbar from './navbar';

interface props {

}

interface state {
    player_id: String | null,
    game_id: String | null
}

const apiUrl = process.env.REACT_APP_API_URL ?? "http://localhost:3000";

class Game extends React.Component<{}, state> {
    socket: Socket;

    constructor(props: props) {
        super(props);
        this.socket = io(apiUrl);
        this.state = {
            player_id: null,
            game_id: null
        };
        this.handleMoveClick = this.handleMoveClick.bind(this);
    }

    componentDidMount() {

        this.socket.on('connect', () => {
            console.log('connected to server');
        });

        this.socket.on('disconnect', () => {
            console.log('disconnected from server');
        });

        this.socket.on('your id', myId => {
            this.setState({
                player_id: myId
            })
        })

        this.socket.on('starting', (start) => {
            console.log(start)
            const status_element = document.getElementById('status') as HTMLElement
            status_element.innerHTML = start.message;
            this.setState({
                game_id: start.game_id
            })
        })

        this.socket.on('status', turn => {
            const status_element = document.getElementById('status') as HTMLElement
            status_element.innerHTML = turn;
        })

        this.socket.on('game-board', board => {
            console.log(board)
            for (let i = 0; i < board.length; i++) {
                const element = document.getElementById((i + 1).toString()) as HTMLElement;
                element.innerHTML = board[i];
            }
        })

    }

    componentWillUnmount() {
        this.socket.disconnect();
    }

    handleMoveClick(event: React.MouseEvent): void {
        const target = event.target as HTMLElement;
        const move: String = target.id;
        // const element = document.getElementById(move);
        // element.innerHTML = this.state.letter;
        const move_message = {
            game_id: this.state.game_id,
            player_id: this.state.player_id,
            position: move
        }
        this.socket.emit('move', move_message)
    }

    componentDidUpdate() {
        // console.log(this.state.player_id)
        if (this.state.game_id) {

        }
    }

    render() {
        return (
            <div id='game-container'>
                <Navbar />
                <h1 id='status'>X O Game</h1>
                <div id='game-grid'>
                    <div className='grid' id='1' onClick={this.handleMoveClick}></div>
                    <div className='grid' id='2' onClick={this.handleMoveClick}></div>
                    <div className='grid' id='3' onClick={this.handleMoveClick}></div>
                    <div className='grid' id='4' onClick={this.handleMoveClick}></div>
                    <div className='grid' id='5' onClick={this.handleMoveClick}></div>
                    <div className='grid' id='6' onClick={this.handleMoveClick}></div>
                    <div className='grid' id='7' onClick={this.handleMoveClick}></div>
                    <div className='grid' id='8' onClick={this.handleMoveClick}></div>
                    <div className='grid' id='9' onClick={this.handleMoveClick}></div>
                </div>
            </div>
        )
    }
}

export default Game;
