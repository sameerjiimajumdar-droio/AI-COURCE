from flask import Flask, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = "SAMEER"

@app.route('/generate-image', methods=['POST'])
def generate_image():
    data = request.json
    prompt = data.get('prompt')
    
    if not prompt:
        return jsonify({"error": "Prompt missing"}), 400
    
    response = openai.Image.create(
        prompt=prompt,
        n=1,
        size="512x512"
    )
    
    image_url = response['data'][0]['url']
    return jsonify({"image_url": image_url})

if __name__ == "__main__":
    app.run(debug=True)
