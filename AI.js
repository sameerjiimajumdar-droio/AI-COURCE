import openai

openai.api_key = "SAMEER"

response = openai.Image.create(
    prompt="A fantasy castle in the clouds",
    n=1,
    size="512x512"
)

print(response['data'][0]['url'])
