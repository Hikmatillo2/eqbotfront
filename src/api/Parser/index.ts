// import {JSX} from "react";

// q1: {
//     text: 'dplgbmfglb',
//         answers: {
//         answer1: {
//             value: 2,
//                 text: "dfvdfv",
//         },
//         answer2: {
//             value: 3,
//                 text: 'dlfkvmdfmv'
//         }
//     }
// },

interface Answer {
    value: string;
    text: string
}

interface Question {
    text: string;
    answers: [Answer];
}

interface RawData {
    key: Question;
}

export function parse(data: string): Array<Question> {
    const arrayQuestions: Array<Question> = [];
    const parsedData = JSON.parse(data);
    for (const key in parsedData) {
        arrayQuestions.push(parsedData[key] as Question);
    }
    return arrayQuestions;
}

// console.log(parse(`
// {
//   "q1": {
//     "text": "dplgbmfglb",
//     "answers": [
//         {
//             "value": "2",
//             "text": "dfvdfv"
//         },
//         {
//             "value": "3",
//             "text": "dlfkvmdfmv"
//         }
//     ]
//   }
// }
// `)[0]);