import requests
import json
url = "https://eu-west-2.aws.data.mongodb-api.com/app/data-jzlta/endpoint/data/v1/action/findOne"

payload = json.dumps({
    "collection": "<COLLECTION_NAME>",
    "database": "<DATABASE_NAME>",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
})
headers = {
  'Content-Type': 'application/json',
  'Access-Control-Request-Headers': '*',
  'api-key': 'ZeG8k10SdgIU9wDtIVP7hJflh2rCmYHVh3ygUOBPwxPKgzlCVPgZpNEPJAmZNQJu',
  'Accept': 'application/ejson'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
