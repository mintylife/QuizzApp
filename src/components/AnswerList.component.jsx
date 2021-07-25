import React from 'react';
import { Answer } from './Answer.component';

export const AnswerList = (props) => {
    return (
      <ul className="answer-list">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </ul>
    );
}
