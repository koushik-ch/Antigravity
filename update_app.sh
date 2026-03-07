# First we inject the revisit logic
sed -i '' "s/let solved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');/let solved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');\nlet revisits = JSON.parse(localStorage.getItem(STORAGE_KEY+'_revisits') || '{}');\nlet notes = JSON.parse(localStorage.getItem(STORAGE_KEY+'_notes') || '{}');/" /Users/koushik/Desktop/Antigravity/google-l4-app.js
