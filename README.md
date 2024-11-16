# Developper Setup

## 1. Install dependencies

```bash
npm install
```

# Run scripts

## 1. Run the script

```bash
node path_to_script.js
```

# Usage via docker

## 1. Prepare env

copy .env.example to .env and fill the required variables

## 2. Run docker

in this example we will run the script `modules/free-box-dl-last-invoice/index.js` that downloads last invoice from FreeBox espace client.

```bash
docker run --env-file .env -v ./output:/app/data aloulouamine/web-automation-runner modules/free-box-dl-last-invoice/index.js
```

The invoice pdf will be downloaded in the `output` folder.
