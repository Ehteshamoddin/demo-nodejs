var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`<!DOCTYPE html>
    <html>
    
    <head>
        <title>CI/CD Pipeline with Jenkins, Containers and Amazon ECS</title>
        <style>
            header {
                background-color: #333;
                color: white;
                padding: 15px;
                text-align: center;
            }
    
            nav {
                background-color: #f2f2f2;
                overflow: hidden;
            }
    
            nav a {
                float: left;
                color: #333;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 17px;
            }
    
            nav a:hover {
                background-color: #ddd;
                color: black;
            }
    
            main {
                margin-top: 20px;
                margin-bottom: 20px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-shadow: 0 0 5px #ccc;
                background-color: #f9f9f9;
            }
    
            main h1 {
                margin-top: 0;
                margin-bottom: 10px;
                color: #333;
            }
    
            main p {
                margin-top: 0;
                margin-bottom: 10px;
                color: #666;
            }
    
            main a {
                color: #333;
            }
    
            main a:hover {
                color: #666;
            }
        </style>
    </head>
    
    <body>
        <header>
            <h1>CI/CD Pipeline with Jenkins, Containers and Amazon ECS</h1>
        </header>
        <main>
            <h2 id="ci">Continuous Integration(CI)</h2>
            <p>Continuous Integration (CI) is the practice of regularly merging code changes from multiple developers into a
                single shared repository. This helps to detect and resolve conflicts early on, and ensures that the code is
                always in a releasable state. Jenkins is a popular open source CI tool that can automate the build, test and
                deployment processes.</p>
    
            <h2 id="cd">Continuous Delivery(CD)</h2>
            <p>Continuous Delivery (CD) is the practice of automating the entire software release process. This includes
                building, testing and deploying the code changes to production or a staging environment. This ensures that
                the software can be reliably released at any time. Jenkins can also be used to automate the CD process.</p>
    
            <h2 id="docker">Docker Containers</h2>
            <p>Docker is a containerization technology that allows developers to package an application and its dependencies
                into a single container. Containers can be easily moved between development, testing and production
                environments, making it an ideal tool for creating a portable and consistent development environment.</p>
    
            <h2 id="ecs">Amazon Elastic Container Service (ECS)</h2>
            <p>Amazon ECS is a fully-managed container orchestration service that makes it easy to run, stop and manage
                Docker containers on a cluster. It integrates with other AWS services such as EC2, ECR and CloudWatch, and
                can be used to deploy and manage containers at scale.</p>
    
            <h2 id="ecr">Amazon Elastic Container Service (ECR)</h2>
            <p>AWS Elastic Container Registry is a Docker Image Repository fully managed by AWS to easily store, share, and
                deploy container images. We will be using AWS ECR to store Docker Images of our sample Nodejs application.
            </p>
        </main>
    </body>
    
    </html>`);
});

var port = 3000;
server.listen(port);
module.exports = server;
console.log("Server is available on Port:", port);