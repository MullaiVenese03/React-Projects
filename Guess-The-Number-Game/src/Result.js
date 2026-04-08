import React from "react";

function Result ({term, secretNum}) {

    let result;
    if (term) {
        if ( term > secretNum ) {
            result = 'Higher';
        } else if ( term < secretNum ) {
            result = 'Lower';
        } else if ( term == secretNum ) {
            result = 'Hurray! Correct'
        } else {
            result = 'Enter valid input '
        }
    }

        return (
            <h3>
                You Guessed: {result}
            </h3>
        )
}

export default Result;