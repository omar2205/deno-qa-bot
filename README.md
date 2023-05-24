# Deno QA bot

Helps you bootstrap a bot to answer questions using Deno and [transformers.js](https://github.com/xenova/transformers.js).

By default, it uses a simple model, follow transformers.js guide to use more powerful models.

You can use `omar2205/roberta-base-squad2-onnx`. It's a bit more powerful, and uses more RAM, sometimes you will hit the memory limit in Deno Deploy.

## Usage

You can click this link: [Deploy to Deno Deploy](https://dash.deno.com/new?url=https://raw.githubusercontent.com/omar2205/deno-qa-bot/main/main.ts&env=BOT_CONTEXT). And you will deploy this code into the Deno Deploy project.

You will be asked to provide a `context`, provide all the information for the model to get the answers. (Might need a bit updating to get good results)
Example: 

```
Your name is MrBot.
My font is Jetbrains Mono.
I use nvim as my editor.
```

Add `,BOT_MODEL=MODEL/PATH` to the URL to use a custom model.

For example: `,BOT_MODEL=omar2205/roberta-base-squad2-onnx`


You can also clone (or download) this repo and update relevant parts.

### API usage

Example:

```
curl "https://brave-newt-41.deno.dev/?q=what's the font?"
{
  "answer": "anonymous pro",
  "score": 0.19661939422501717,
  "question": "what's the font?"
}
