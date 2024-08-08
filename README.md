# Simple Webhook Server

A simple Node.js webhook server for portfolio.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/simple-webhook.git
    cd simple-webhook
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the server:
    ```bash
    npm start
    ```

The server will be running on `http://localhost:3000/webhook`.

## Usage

You can test the webhook by sending a POST request to `http://localhost:3000/webhook` with a JSON body.

Example:

```json
{
    "event": "test_event",
    "data": {
        "message": "Hello, webhook!"
    }
}

