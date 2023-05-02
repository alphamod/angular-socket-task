import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('https://mst-full-stack-dev-test.herokuapp.com/');
  }

  public getResponse(): Observable<SocketResponse> {
    return new Observable<SocketResponse>((observer) => {
      this.socket.on('data-update', (response: SocketResponse) => {
        observer.next(response);
      });
    });
  }
}

export interface SocketResponse {
  MSTID: number;
  Match: number;
  First: string;
  Last: string;
  'Player Name': string; 
  Nationality: string;
  SOD: null;
  Score: number;
  Today: number;
  Hole1Strokes: number;
  Hole1STP: number;
  Hole2Strokes: number;
  Hole2STP: number;
  Hole3Strokes: number;
  Hole3STP: number;
  Hole4Strokes: number;
  Hole4STP: number;
  Hole5Strokes: number;
  Hole5STP: number;
  Hole6Strokes: number;
  Hole6STP: number;
  Hole7Strokes: number;
  Hole7STP: number;
  Hole8Strokes: number;
  Hole8STP: number;
  Hole9Strokes: number;
  Hole9STP: number;
  OutStrokes: number;
  OutSTP: number;
  Hole10Strokes: number;
  Hole10STP: number;
  Hole11Strokes: number;
  Hole11STP: number;
  Hole12Strokes: number;
  Hole12STP: number;
  Hole13Strokes: number;
  Hole13STP: number;
  Hole14Strokes: number;
  Hole14STP: number;
  Hole15Strokes: number;
  Hole15STP: number;
  Hole16Strokes: number;
  Hole16STP: number;
  Hole17Strokes: number;
  Hole17STP: number;
  Hole18Strokes: number;
  Hole18STP: number;
  InStrokes: number;
  InSTP: number;
  TotalStrokes: number;
  TotalSTP: number;
  tournamentID: number;
  round: number;
  orderInMatch: number;
  lastUpdated: string;
  status: number;
  leaderboardID: number;
  teeStart: number;
  teeTime: string;
  holesPlayed: number;
  course: number;
  matchID: number;
  Amature: number;
  isTeam: number;
  CalculatedRankInteger: number;
  position: number;
  UniquePosition: number;
  TVName: string;
  Eastern: null;
  Handicap: number;
  SortPriority: null;
  Sex: string;
}
