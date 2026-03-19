import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
if not api_key or api_key == "your-api-key-here":
    print("Ошибка: замените значение OPENAI_API_KEY в файле .env на настоящий ключ.")
    exit(1)

client = OpenAI(api_key=api_key)

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {
            "role": "user",
            "content": (
                "Придумай 3 креативных названия для моего проекта: "
                "Telegram-бот, который помогает пользователям вовремя принимать лекарства"
            ),
        }
    ],
)

print(response.choices[0].message.content)
