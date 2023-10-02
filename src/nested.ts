import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((q) => q?.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions = questions.filter((question) => {
        return (
            question.body !== "" ||
            question.expected !== "" ||
            (Array.isArray(question.options) && question.options.length > 0)
        );
    });

    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    for (const question of questions) {
        if (question.id === id) {
            return question;
        }
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const filteredQuestions = questions.filter(
        (question) => question.id !== id
    );
    return filteredQuestions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((q) => {
        return q["name"];
    });
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let totalPoints = 0;
    for (const question of questions) {
        totalPoints += question.points;
    }

    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let totalPoints = 0;

    for (const question of questions) {
        if (question.published === true) {
            totalPoints += question.points;
        } else {
            continue;
        }
    }

    return totalPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published";

    // Initialize an array to hold the CSV rows
    const rows = [];

    // Iterate through the questions and create CSV rows for each question
    for (const question of questions) {
        // Convert the 'options' field to the number of options
        const optionsCount = question.options.length;

        // Create a CSV row for the question
        const row = `${question.id},${question.name},${optionsCount},${question.points},${question.published}`;

        // Push the row to the rows array
        rows.push(row);
    }

    // Combine the header and rows into a single CSV string, separated by newlines
    return [header, ...rows].join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers: Answer[] = [];

    for (const question of questions) {
        const answer: Answer = {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        };
        answers.push(answer);
    }
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishedQuestions: Question[] = [];

    // Iterate through the input questions
    for (const question of questions) {
        // Create a new copy of each question with 'published' set to true
        const publishedQuestion: Question = {
            ...question,
            published: true
        };

        // Add the modified question to the new array
        publishedQuestions.push(publishedQuestion);
    }

    // Return the array of published questions
    return publishedQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length <= 1) {
        return true;
    }

    // Get the type of the first question
    const firstQuestionType = questions[0].type;

    // Check if all questions have the same type
    for (let i = 1; i < questions.length; i++) {
        if (questions[i].type !== firstQuestionType) {
            return false;
        }
    }

    // All questions have the same type
    return true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion = {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };

    const updatedQuestions = [...questions, newQuestion];

    return updatedQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const updatedQuestions: Question[] = [];

    // Iterate through the input questions
    for (const question of questions) {
        // Check if the current question has the targetId
        if (question.id === targetId) {
            // If it has the targetId, create a new question with the updated name
            const updatedQuestion: Question = {
                ...question,
                name: newName
            };
            updatedQuestions.push(updatedQuestion);
        } else {
            // If it doesn't have the targetId, push the original question
            updatedQuestions.push(question);
        }
    }

    // Return the array of updated questions
    return updatedQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            return {
                ...question,
                type: newQuestionType,
                options:
                    newQuestionType === "multiple_choice_question"
                        ? question.options
                        : []
            };
        } else {
            return question;
        }
    });
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            const updatedOptions = [...question.options]; // Create a copy of the options array

            if (targetOptionIndex === -1) {
                // Add the newOption to the end of the list
                updatedOptions.push(newOption);
            } else if (
                targetOptionIndex >= 0 &&
                targetOptionIndex < updatedOptions.length
            ) {
                // Replace the existing element at the targetOptionIndex with newOption
                updatedOptions[targetOptionIndex] = newOption;
            }

            return {
                ...question,
                options: updatedOptions
            };
        } else {
            return question;
        }
    });
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const duplicateIndex = questions.findIndex(
        (question) => question.id === targetId
    );

    if (duplicateIndex === -1) {
        return questions;
    }
    const duplicateQuestion = {
        ...questions[duplicateIndex],
        id: newId,
        name: `Copy of ${questions[duplicateIndex].name}`
    };
    const result = [...questions];
    result.splice(duplicateIndex + 1, 0, duplicateQuestion);
    return result;
}
