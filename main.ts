import { serve } from 'https://deno.land/std@0.188.0/http/server.ts'
import {
  env,
  pipeline,
} from 'https://unpkg.com/@xenova/transformers@2.0.0/dist/transformers.min.js'
// We need to disable these options to work in Deno
env.useBrowserCache = false
env.allowLocalModels = false

const model = Deno.env.get('BOT_MODEL')
// get the model path from ENV
const pipe = await pipeline('question-answering', model ? model : undefined)
const context = Deno.env.get('BOT_CONTEXT')

serve(async (req) => {
  const q = new URL(req.url).searchParams.get('q')

  if (!q) return Response.json({ error: 'No question' }, { status: 400 })

  const output = await pipe(q, context)

  let res

  // We are ignoring low scores questions
  if (output.score > 0.01) res = { ...output, question: q }
  else res = { answer: 'Sorry, I don\'t know.', score: 0, question: q }

  return Response.json(res)
})
