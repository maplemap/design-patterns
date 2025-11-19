# ============================
# Run Javascript Example
# ============================
run-js:
	node $(pattern)/javascript/demo.js

# ============================
# Run Typescript Example
# ============================
run-ts:
	npx tsx $(pattern)/typescript/demo.ts

# ============================
# Run Python Example
# ============================
run-py:
	python3 $(pattern)/python/demo.py
