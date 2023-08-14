## Run the app for development
```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose build
docker compose up
```

## Work & deployment
1. Create a new branch to work on a feature
2. Open a pull request from your branch to develop
3. Once the PR has been approved, merge the branch to develop
4. Pull the develop branch
5. Run the script
```bash
./release.sh releaseName
```
-> this will merge the develop branch to the production branch.
-> Vercel will then automatically deploy the production branch.

## Production environment
Vercel: Handles hosting and domain name.
Checkly: handles health checks automatically during deployment.

