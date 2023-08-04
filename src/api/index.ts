import { FormData } from "../pages/Login";
import {parse} from "../api/Parser"

export async function register(telegramId: string, userData: FormData) {

    console.log(userData)
    const response = await fetch(`https://ptsv3.com/t/3/post/`,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({telegram_id: telegramId, data: userData})
        });
    if (!response.ok) {
        return {status: 400};
    } else {
        return {status: 200, ...JSON.parse(await response.json())};
    }
}

export async function getQuestions() {
    const response = await fetch(`https://ptsv3.com/t/3/post/`,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({telegram_id: telegramId, data: userData})
        });
    if (!response.ok) {
        return {status: 400};
    } else {
        return {status: 200, data: parse(await response.json())};
    }
}

