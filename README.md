Your task is to create a custom form editor.

The fom schema is attached, and so we want an editor to load a schema and be
able to update it.

A Low Fidelity Prototype is attached. For styling, please use
[TailwindCSS](https://tailwindcss.com/).

## User Stories

- User can add a new question, with its' text, short name, and chose its' answer
  type.
- The user can also choose any other question as the 'next question'. This
  determines the order the form editor shows questions, and defaults to null,
  meaning the question is the last one in the list.
- If another question is added, and the previous question's next question is set
  to null, auto-set the previous question's next question to the current one.
- Questions and answers have locally unique numeric IDs you should generate as
  you need them.
- For text questions, there are no answers.
- For multi or choice (they are identical to one another) please allow adding
  answers to the list.
- When adding an answer, the user chooses text, short name, and OPTIONALLY can
  override the next_question for this specific answer (default to null)
- Clicking Edit on an existing question or answers allows modifying them again,
  and clicking Save will commit it to the JSON schema object and close the edit
  line.
- The data structure to use for this assignment is provided in the repository

Set up the project using create-react-app

![mockup image](https://i.ibb.co/grjBGBW/form-editor-mockup.jpg)
