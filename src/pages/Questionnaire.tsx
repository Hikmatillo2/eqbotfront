import {useCallback, useMemo} from "react";
import {getQuestions} from "../api";
import {Card, Checkbox, Space, Typography} from "antd";

export default () => {
    // const questions = useMemo(
    //     () => await getQuestions(),
    //     []
    // )

    const data = [
        {
            text: 'dplgbmfglb1',
            answers: [
                {value: '2', text: 'dfvdfv'},
                {value: '3', text: 'dlfkvmdfmv'}
            ]
        },
        {
            text: 'dplgbmfglb2',
            answers: [
                {value: '2', text: 'dfvdfv'},
                {value: '3', text: 'dlfkvmdfmv'}
            ]
        },
        {
            text: 'dplgbmfglb3',
            answers: [
                {value: '2', text: 'dfvdfv'},
                {value: '3', text: 'dlfkvmdfmv'}
            ]
        },
        {
            text: 'dplgbmfglb4',
            answers: [
                {value: '2', text: 'dfvdfv'},
                {value: '3', text: 'dlfkvmdfmv'}
            ]
        },
        {
            text: 'dplgbmfglb5',
            answers: [
                {value: '2', text: 'dfvdfv'},
                {value: '3', text: 'dlfkvmdfmv'}
            ]
        }];

    const parsed = data.map(
        (each) => {
            return (
                <Space direction={'vertical'}>
                    <Card title={each.text}>
                        <Space
                            direction={'vertical'}
                            align={'start'}
                        >
                            {
                                each.answers.map(
                                    (each_) => {
                                        return (
                                            <Checkbox>
                                                {each_.text}
                                            </Checkbox>
                                        )
                                    }
                                )
                            }
                        </Space>
                    </Card>
                </Space>
            )
        }
    )
    return (
        <Space direction={'vertical'}>
            {parsed}
        </Space>
    );
}


const f = {
    testName: "Первый тест",
    countingFunction: "(() => answer.reduce((sum, current) => sum + current.answer.value, 0))()",
    questions: [
        {
            text: 'dplgbmfglb1',
            answers: [
                {value: '2', text: 'dfvdfv'},
                {value: '3', text: 'dlfkvmdfmv'}
            ]
        },
        {
            text: 'dplgbmfglb2',
            answers: [
                {value: '2', text: 'dfvdfv'},
                {value: '3', text: 'dlfkvmdfmv'}
            ]
        },
    ]
}