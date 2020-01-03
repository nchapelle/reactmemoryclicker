import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    tempFriends: friends,
    currentScore: 0,
    highScore: 0,
    message: "Click an Image to Start!"
  };

  componentDidMount() {
    const randomizeFriend = this.state.friends;
    this.shuffle(randomizeFriend);
    this.setState({ friends: randomizeFriend });
  }

  checkFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const myFriends = this.state.tempFriends.find(friend => friend.id === id);
    if (myFriends === undefined) {
      this.setState({
        tempFriends: friends,
        highScore:
          this.state.currentScore >= this.state.highScore
            ? this.state.currentScore
            : this.state.highScore,
        message: "Game Over, Try Again!",
        currentScore: 0
      });
    } else {
      const noNewFriends = this.state.tempFriends.filter(
        friend => friend.id !== id
      );
      this.setState({
        currentScore: this.state.currentScore + 1,
        tempFriends: noNewFriends,
        message: "Keep Going You Got This!"
      });
      const randomizeFriend = this.state.friends;
      this.shuffle(randomizeFriend);
      this.setState({ friends: randomizeFriend });
    }
  };

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav
          message={this.state.message}
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Wrapper>
          <Title>Remember the Clicks</Title>
          <div className="img-container">
            {this.state.friends.map(friend => (
              <FriendCard
                checkFriend={this.checkFriend}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
