import {
    ProForm,
    ProFormText,
} from '@ant-design/pro-components';
import {
    Form, Typography, ConfigProvider, Button, message, Space, DatePicker,
} from 'antd';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useCallback} from "react";
import {register} from "../api";
import ru_RU from 'antd/lib/locale/ru_RU';


export interface FormData {
    firstName: string;
    secondName: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth: string;
    username: string;
}

export default () => {
    const CameraShot = '/logo3.png';
    const cameraShotIcon = (<img src={CameraShot} style={{width: '50%', height: '50%'}} alt=""/>);

    const navigate = useNavigate();

    const [params] = useSearchParams();
    const telegramId = params.get('telegram_id');
    const [msg, antMessageHolder] = message.useMessage();

    const onFinish = useCallback(async (formData: FormData) => {
        console.log(formData);
        console.log(telegramId);
        const response = await register(telegramId, formData);
        if (response.status === 400) {
            msg.error('Произошла ошибка! Попробуйте еще раз!')
        } else {
            msg.success('Вы были зарегистрированы!')
        }
        navigate('/')
    }, [msg, navigate, telegramId])

    return (
        <ConfigProvider
            theme={
                {
                    token: {
                        fontFamily: "Montserrat",
                        colorPrimary: '#b2eb51',
                        colorError: '#b2eb51'
                    }
                }
            }
            locale={ru_RU}>
            <div
                className="w-full"
                style={
                    {
                        backgroundImage: 'url(ocean.jpeg)',
                        top: "0px",
                        right: "0px",
                        width: "100%",
                        height: "100%",
                        position: 'fixed',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                    }
                }>
                <div
                    style={
                        {
                            background: 'transparent',
                            borderRadius: '12px',
                            width: '400px',
                        }
                    }>
                    {antMessageHolder}
                    {cameraShotIcon}
                    <div>
                        <Typography.Text style={
                            {
                                color: 'white',
                                fontSize: 26
                            }
                        }>
                            EQ AI
                        </Typography.Text>
                    </div>
                    <Form
                        onFinish={onFinish}
                        style={
                            {
                                marginTop: '10%'
                            }
                        }>

                        <ProFormText
                            name="username"
                            placeholder="Имя пользователя"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите имя пользователя!',
                                }
                            ]}
                        />
                        <Space>
                            <ProFormText
                                name="firstName"
                                placeholder="Имя"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Введите свое имя!',
                                    }
                                ]}
                            />
                            <ProFormText
                                name="secondName"
                                placeholder="Фамилия"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Введите свою фамилию!',
                                    }
                                ]}
                            />
                            <ProFormText
                                name="lastName"
                                placeholder="Отчество"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Введите свое отчество!',
                                    }
                                ]}
                            />
                        </Space>

                        <ProForm.Item
                            name="dateOfBirth"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите свой возраст!',
                                }
                            ]}>
                            <DatePicker
                                format="YYYY-MM-DD"
                                placeholder="Дата рождения"
                                style={{width: '80%'}}
                                locale={ru_RU}
                                mode={"date"}
                            />
                        </ProForm.Item>

                        <Button
                            htmlType="submit"

                            style={{
                                width: '100%',
                                borderColor: 'transparent !important',
                            }}
                            ghost
                        > Регистрация
                        </Button>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};
