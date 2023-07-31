const form_schema = {
  diagnosticquestion_set: [
    {
      id: 258,
      answer_to_question: [
        {
          id: 278,
          text: "YES",
          next_question: null,
        },
        {
          id: 279,
          short_name: "n",
          text: "NO",
          next_question: null, // refers to the ID of question 3.
        },
      ],
      short_name: "head-hurts",
      text: "Does your head hurt?",
      custom_answer_placeholder: "placeholder here",
      custom_answer_type: "choice",
      diagnostic_form: 44,
      clinic: 1,
      next_question: null,
    },
    {
      id: 259,
      answer_to_question: [],
      short_name: "head-hurts",
      text: "Do you have any fever?",
      custom_answer_placeholder: "placeholder here",
      custom_answer_type: "text",
      diagnostic_form: 44,
      clinic: 1,
      next_question: null,
    },

    {
      id: 260,
      answer_to_question: [
        {
          id: 278,
          text: "YES",
          next_question: null,
        },
        {
          id: 279,
          short_name: "n",
          text: "NO",
          next_question: null,
        },
      ],
      short_name: "head-hurts",
      text: "Do you have temperature?",
      custom_answer_placeholder: null,
      custom_answer_type: "multi",
      next_question: null,
    },
    {
      id: 261,
      answer_to_question: [],
      short_name: "head-hurts",
      text: "Do you have fatigue?",
      custom_answer_placeholder: null,
      custom_answer_type: "text",
      next_question: null,
    },
    {
      id: 262,
      answer_to_question: [],
      short_name: "head-hurts",
      text: "Describe your problem?",
      custom_answer_placeholder: null,
      custom_answer_type: "text",
      next_question: null,
    },
  ],
};

export default form_schema;
