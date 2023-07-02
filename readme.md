## API routes
- POST[ http://localhost:5000/api/auth/register ]
{
    "username": "test",
    "password": "test"
}
- POST[ http://localhost:5000/api/auth/login ]
{
    "username": "test",
    "password": "test"
}
###### bearer token will be generated and returned in the authorization header for the following routes.

- GET[ http://localhost:5000/api/ai-tools]
List of all ai-tools.

- POST[http://localhost:5000/api/ai-tools]
{
        "name": "420",
        "description": "This is anfdfds AI tool for image recognition.",
        "isPaid": true,
        "toolWebsite": "https://example.com/ai-tool2212"
}
output : "msg": "Be a subscription member to access this tool"

#### You need to subscribe to be able to add a new ai-tool.
- POST[http://localhost:5000/api/payment/create]
{
    "amount": 100
}
output: "message": "Amount should be atleast 250INR fir the subscription."
#### you need to make a payment of atleast 250INR to be able to subscribe.
- POST[http://localhost:5000/api/payment/create]
{
    "amount": 250
}
output: "message": "Payment successful. User is subscribed."
#### After making a payment of atleast 250INR you will be subscribed to the platform.
- POST[http://localhost:5000/api/ai-tools]
{
        "name": "420",
        "description": "This is anfdfds AI tool for image recognition.",
        "isPaid": true,
        "toolWebsite": "https://example.com/ai-tool2212"
}
 now the tool will be successfully added to the platform..

- POST[http://localhost:5000/api/ai-tools/:id/rate]
{
    "rating": 4
}
### To rate the tool. You can rate the tool only once. rating between 1 to 5. 
### Average rating will be calculated and displayed as well. 

- POST[http://localhost:5000/api/ai-tools/:id/reviews]
{
    "review": "This is a review for the tool."
}
### To review the tool. You can review the tool only once.
### All the reviews will be displayed as well.

- GET[http://localhost:5000/api/ai-tools/search?query=keyword]
### to search by a keyword. Will display all the tools with the keyword in their name or description.
In place of keyword, pass the actuall word you want to search for.