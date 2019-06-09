class LeaderBoard {

  constructor() {
    this.highScores = new Score();
    this.players = {};
  }

  add_score = (player_id, score) => {
    if (player_id in this.players) {
      this.players[player_id].push(score);
    } else {
      this.players[player_id] = [score];
    }

    this.highScores.add(score);
    let scores = this.players[player_id];
    let amount = scores.length
    return scores.reduce((a, b) => a + b) / amount;
  };

  top = (num_players) => {
    let topPlayers = [];
    let scores = this.highScores.scores();
    let i = 0;
    while (topPlayers.length < num_players) {
      let current = scores[i];
      for (let player in this.players) {
        if (this.players[player].includes(current) && !(topPlayers.includes(parseInt(player)))) {
          topPlayers.push(parseInt(player));
        }
      }
      i++;
    }
    return topPlayers;
  };

  reset = (player_id) => {
    let scores = this.players[player_id];
    this.players[player_id] = [0];

    scores.forEach(score => {
      let idx = this.highScores.findScore(score);
      this.highScores.delete(idx);
    });

  };
}

class Score {
  constructor() {
    this.array = [];
    this.size = 0;
  }

  add(score) {
    this.array.unshift(score);
    this.size++;
    if (!this.size) return;

    for (let i = 0; i < this.size; i++) {
      let currentVal = this.array[i];
      let nextVal = this.array[i + 1];
      if (currentVal < nextVal) {
        [this.array[i], this.array[i + 1]] = [this.array[i + 1], this.array[i]];
      } else return;
    }
  }

  findScore(score, arr = this.array) {
    let middle = Math.floor(arr.length / 2);
    if (arr[middle] === score) return middle;
    if (arr[middle] > score) {
      return this.findScore(score, arr.slice(middle + 1)) + middle + 1;
    } else {
      return this.findScore(score, arr.slice(0, middle));
    }
  }

  delete(idx) {
    this.array = this.array.slice(0, idx).concat(this.array.slice(idx + 1));
    this.array.push(0);
    this.size = this.array.length;
  }

  scores() {
    return this.array;
  }
}