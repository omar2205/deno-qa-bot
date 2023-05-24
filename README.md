# Deno QA bot

Helps you bootstrap a bot to answer questions using Deno and [transformers.js](https://github.com/xenova/transformers.js).

By default, it uses a simple model, follow transformers.js guide to use more powerful models.

You can use `omar2205/roberta-base-squad2-onnx`. It's a bit more powerful, and uses more RAM, sometimes you will hit the memory limit in Deno Deploy.

## Usage

You can click this link: [Deploy to Deno Deploy](https://dash.deno.com/new?url=https://raw.githubusercontent.com/omar2205/deno-qa-bot/main/main.ts&env=BOT_CONTEXT). And you will deploy this code into the Deno Deploy project.

Add `,BOT_MODEL=MODEL/PATH` to the URL to use a custom model.

For example: `,BOT_MODEL=omar2205/roberta-base-squad2-onnx`


You can also clone (or download) this repo and update relevant parts.

### API usage

Example:
