# Evals

This uses the [evals framework](https://github.com/openai/evals) from OpenAI to evaluate model performance.

## Setup

Use a virtual environment to install the dependencies.

```bash
# Open this directory from the root of the repo, or run `code evals` if using VSCode
cd evals

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
