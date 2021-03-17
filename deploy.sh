#!/bin/bash
# on our EC2 instance

echo "deploying"

docker stop backend
docker rm backend

docker pull michaelpeterswa/guwt-admin-panel-backend

docker run -d -p 6969:6968 --name=backend --restart=always michaelpeterswa/guwt-admin-panel-backend
docker cp /home/ec2-user/backend_env.txt backend:/usr/src/app/.env
docker restart backend
