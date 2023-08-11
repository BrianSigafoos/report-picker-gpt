# Report Picker GPT

Live demo at [report-picker-gpt.vercel.app](https://report-picker-gpt.vercel.app)

Similar to [BrianSigafoos/query-gpt](https://github.com/BrianSigafoos/query-gpt) with a live demo at [query-gpt.vercel.app](https://query-gpt.vercel.app)


## TODO

- [x] Use [OpenAI functions](https://platform.openai.com/docs/api-reference/chat/create#chat/create-functions) to force JSON response
- [x] Add current date to prompt and working filters by date
- [ ] Return 1-3 reports or an error message
- [ ] Add confidence score for each report recommendation
- [ ] Add tests/`eval` and compare GPT 3.5 vs 4.0 performance across some baseline queries
- [ ] Switch to `openai` NPM package once 4.0 is released (streaming support): <https://github.com/openai/openai-node/discussions/182>

## References

- [OpenAI functions](https://platform.openai.com/docs/api-reference/chat/create#chat/create-functions)
- [How to call functions with chat models](https://github.com/openai/openai-cookbook/blob/c651bfdda64ac049747c2a174cde1c946e2baf1d/examples/How_to_call_functions_with_chat_models.ipynb)
- [Tokenizer](https://platform.openai.com/tokenizer) - usage estimates

___

_below is from the `create-next-app` script..._

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
