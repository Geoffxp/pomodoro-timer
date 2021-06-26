# Pomodoro Timer

## React

This program was made using react and twtter bootstrap.
The project was my first major asignment with React given to me in my Thinkful class.
I learned a lot about state management and asynchronous coding and got more experience with bootstrap as well.
The program has a single page design but is responsive both to inputs and sizing to some degree.  
- Some of the sizing responsiveness needs to tweaked  currently -

## What is a Pomodoro Timer?

The pomodoro technique is a method of breaking up periods of work for maximum efficiency.
Originally created by an Francesco Cirillo, who used a kitchen timer to set focus periods and then break periods.
The kitchen timer that he used was in the shape of a *pomodoro* (Italian for tomato).

## How does it work?

The program is based around state management.
The user is able to adjust focus and break timers in increments of 5 and 1 minutes respectfully.
These changes change the saved data via the useState function in React.
When the user presses play a timer begins counting down and a progress bar begins filling up.
Once the timer is up an alarm sounds and the break timer begins.
The user may pause the timer, which freezes the state updates that occur each second.
If the user presses the stop button, everything is set back to the initial state and the bar is no longer rendered to the screen.
The timers maintain the values given by the user.
