Currently served from Barebones Server tmurv@66.85.30.155 -p 222
Domains registered with grape.ca username tmurvv

- FE = /var/www/timesheets.ultrenos.ca/html
- FE URL = timesheets.ultrenos.ca
- BE = /app/ultrenos/ultrenostimesheets-api
- BE URL = timesheets-api.ultrenos.ca (as of 2021, running on port 7050)
- FE-staging = /var/www/timesheets-staging.ultrenos.ca
- FE-staging URL = timesheets-staging.ultrenos.ca
- BE-staging = /app/ultrenos/ultrenostimesheets-staging-api // staging not currently implemented?
- BE-staging URL = timesheets-staging-api.ultrenos.ca // staging not currently implemented? (as of 2021, running on port 7051)

NEW DEPLOY INSTRUCTION FOR BAREBONES

// test this removing the *.*, should get the -r flag to work
scp -P 222 -r html/*.* tmurv@66.85.30.155:/var/www/timesheets.ultrenos.ca/
scp -P 222 -r html/static tmurv@66.85.30.155:/var/www/timesheets.ultrenos.ca/
scp -P 222 -r html/img tmurv@66.85.30.155:/var/www/timesheets.ultrenos.ca/

To Deploy FE:
- check .env for correct BackEnd
- check .env for BUILD_PATH=html
- npm run build 
Production BUILD:
- don't forget to run build
- scp -r html/ root@143.198.188.28:/var/www/timesheets.ultrenos.ca/   // adds/replaces html subdir and all files
Staging BUILD:
- don't forget to run build
- scp -r html/ root@143.198.188.28:/var/www/timesheets-staging.ultrenos.ca/   // adds/replaces html subdir and all files