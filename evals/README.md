# Evals

This uses the [evals framework](https://github.com/openai/evals) from OpenAI to evaluate model performance.

## TO DO

- [x] Get [evals.ipynb](evals.ipynb) working using a built-in eval `class: evals.elsuite.basic.match:Match`
- [ ] Create a [custom eval](https://github.com/openai/evals/blob/main/docs/custom-eval.md) that uses `function_call` and `functions` args that [../lib/openai.ts](../lib/openai.ts) uses to call the chat completions API

## Setup

Ensure you've got `export OPENAI_API_KEY=<your key>` in your `.zshrc` (or equivalent) file.

Install dependencies:

```bash
# Open this directory from the root of the repo
code evals # If using VSCode, or: cd evals

pip install virtualenv
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Usage

Run the notebook `evals.ipynb` to evaluate the model performance on the validation set.


## Initial setup

```bash
pip install virtualenv
virtualenv venv
source venv/bin/activate

pip install evals
# Open evals.ipynb notebook, select this virtual environment as the kernel, and try to run the notebook
# Prompted to install `notebook` and more by VSCode

pip freeze > requirements.txt
```
