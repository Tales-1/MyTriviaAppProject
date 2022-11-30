# React Trivia App

![Quizzical](https://user-images.githubusercontent.com/84051594/204838784-6fc96be2-5f92-4d7a-bed7-b1283d43926a.png)

## Summary - A multiple-choice quiz using the fetch API.

This is a project I built as part of the React Basics course on Scrimba. It was my first project dealing with the fetch API. 
The app fetches a list of ten questions upon loading and displays five of them along with the multiple choices. 

Building this project consolidated my understanding of and functional components and how state can be passed through props to update the UI.
Due to my lack of knowledge I struggled with randomising the order of answers so as to not make the first choice the correct one in all instances.

I achieved shuffling the order of answers but the order kept changing upon clicking an answer. 
Why? Because clicking an answer caused a state changed, which in turn forced a rerender, thus shuffling the order again.

Using layoutEffect along with random.seed() I was able to shuffle the answers once and maintain that order upon each rerender.

## Concepts learnt/consolidated 

- Props
- state change
- layoutEffect
- RandomSeed
- Fetch API
- Conditional rendering
