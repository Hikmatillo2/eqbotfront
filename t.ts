interface Question {
    text: string;
    name: string;
    answer: {
        value: number;
        text: string;
    };
}

function d() {
    const tests = {
        q1: {
            text: 'dplgbmfglb',
            answers: {
                answer1: {
                    value: 2,
                    text: "dfvdfv",
                },
                answer2: {
                    value: 3,
                    text: 'dlfkvmdfmv'
                }
            }
        },
        q2: {
            text: 'dplgdfvbmfglb',
            answers: {
                answer1: {
                    value: 8,
                    text: "dfvdfvdfdfv",
                },
                answer2: {
                    value: 5,
                    text: 'dlfkvmxdfvxdfvdfmv'
                }
            }
        }
    };
}

const answer: Array<Question> = [
    {
        text: "dfvdf",
        name: "sfvdf",
        answer: {
            value: 3,
            text: "dfvdfv"
        }
    },
    {
        text: "dfdfvdvvdf",
        name: "sdfvdfvfvdf",
        answer: {
            value: 9,
            text: "dfvdfv"
        }
    }
]

d()

console.log()
