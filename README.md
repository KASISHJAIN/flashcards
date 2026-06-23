# Web Development Project 3 - *Flashcards Part 2*

Submitted by: **Kasish Jain**

This web app: **A Computer Engineering flashcard application that helps students review important CS and CE concepts such as RAM, pointers, TCP, APIs, recursion, stacks, queues, and Big O notation. Users can flip flashcards, submit guesses, receive feedback on their answers, and navigate through the card deck using previous and next controls.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**

  * [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  * [x] Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong
  * [x] Clicking on the submit button with a **correct** answer shows visual feedback that it is correct

* [x] **The user can navigate through an ordered list of cards**

  * [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  * [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  * [x] Both the next and back buttons have visual indication when the user is at the beginning or end of the list by disabling the button

## Optional Features

The following **optional** features are implemented:

* [x] A user’s answer may be counted as correct even when it is slightly different from the target answer

  * [x] Answers are considered correct even if they partially match the answer on the card
  * [x] Uppercase/lowercase differences are ignored

* [ ] Users can use a shuffle button to randomize the order of the cards

* [ ] A counter displays the user’s current and longest streak of correct responses

* [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards

## Additional Features

The following **additional** features are implemented:

* [x] Flashcard flip interaction using React state
* [x] Automatic reset of guess and feedback when navigating between cards
* [x] Clean and responsive flashcard layout

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='YOUR_GIF_LINK_HERE' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif

## Notes

One challenge was transitioning from random card generation in Part 1 to ordered navigation in Part 2 while maintaining proper state management. Another challenge was implementing answer validation and feedback without revealing the answer immediately. Managing multiple React state variables simultaneously for card navigation, guesses, feedback messages, and card flipping required careful debugging and testing.

## License

```
Copyright 2026 Kasish Jain

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
```
