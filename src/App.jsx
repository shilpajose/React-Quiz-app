import { useState } from 'react'
import './App.css'
import { Button, Form } from 'react-bootstrap'

function App() {

  // set questions in a variable
  const questions = [
    {
      id: 1,
      question: "React is mainly used for building ___.",
      options: ['Database', 'Connectivity', 'User interface', 'Design Platform'],
      answer: "User interface"
    },
    {
      id: 2,
      question: "The lifecycle methods are mainly used for ___.",
      options: ['keeping track of event history', 'enhancing components', 'freeing up resources', 'none of the above'],
      answer: "freeing up resources"
    },
    {
      id: 3,
      question: "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
      options: ['<h1>{fetch()}</h1>    ', '<h1>${fetch()}</h1>    ', '<h1>{fetch}</h1>    ', '<h1>${fetch}</h1>    '],
      answer: "<h1>{fetch()}</h1>"
    },
    {
      id: 4,
      question: "Choose the right answer about JSX.",
      options: ['JSX is faster as it performs optimization while compiling code to JavaScript',
        'JSX is a syntax notation for JavaScript XML    ',
        'JSX provides expressiveness of JavaScript along with HTML, like template syntax    ',
        'All of the above options'],
      answer: "JSX is a syntax notation for JavaScript XML"
    },
    {
      id: 5,
      question: "In React, which method is used to create a context?",
      options: ['React.createContext()', 'React.createState()', 'React.createComponent()', 'React.createRef()'],
      answer: "React.createContext()"
    },
    {
      id: 6,
      question: "What is the use of the 'useReducer' hook in React?",
      options: ['To manage state in a component',
        'To reduce the size of a component',
        'For state management with a reducer function',
        'To enhance performance'],
      answer: "For state management with a reducer function"
    },
    {
      id: 7,
      question: "What does 'PureComponent' do in React?",
      options: ['Manages pure functions',
        'Prevents re-rendering if props and state have not changed',
        'Cleans up the component',
        'Enhances component performance'],
      answer: "Prevents re-rendering if props and state have not changed"
    },
    {
      id: 8,
      question: "How do you create a ref in a class component in React?",
      options: ['React.createRef()', 'React.ref()', 'this.ref.create()', 'new Ref()'],
      answer: "React.createRef()"
    },
    {
      id: 9,
      question: "In React, what does the 'useEffect' hook do?",
      options: ['Manages component lifecycle', 'Handles state changes', 'Creates a new effect', 'None of the above'],
      answer: "Manages component lifecycle"
    },
    {
      id: 10,
      question: "What is a Fragment in React?",
      options: ['A part of the component state',
        'A tool for memoization',
        'A component that can return multiple elements',
        'A higher-order component'],
      answer: "A component that can return multiple elements"
    },
    {
      id: 11,
      question: "What is the use of 'useState' hook in React?",
      options: ['To manage state in functional components',
        'To link state between components',
        'To update state in class components',
        'To store data in the browsers local storage'],
      answer: "To manage state in functional components"
    },
    {
      id: 12,
      question: "Which hook is used to memoize a callback function in React?",
      options: ['useEffect',
        'useCallback',
        'useState',
        'useMemo',
        'useRef'],
      answer: "useCallback"
    },

  ]

  const [quizQuestions, setQuizQuestions] = useState(0)
  const [showSubmit, setShowSubmit] = useState(false);
  const [answers, setAnswers] = useState()
  const [score, setScore] = useState(0);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  // next question button click after completing all questions it will show submit button
  const handleNextQuestion = () => {
    setQuizQuestions(quizQuestions + 1)
    if (quizQuestions + 1 === questions.length - 1) {
      setShowSubmit(true);
    }
  }

  // handle submit
  const handleSubmit = () => {
    setAnswers(score)
    // alert(`You scored ${score} out of ${questions.length}`)
  }

  // restart Quiz
  const reStartQuiz = () => {
    setQuizQuestions(0)
  }

  // answer click
  const handleAnswerClick = (selectedoption) => {
    if (selectedoption === questions[quizQuestions].answer) {
      setScore(score + 1)
    }
  }

  //  setQuizQuestions = questions

  return (
    <>
      <div className='container w-75 p-5 border mt-5' sm={12} md={6}>
        <h1 className='text-center text-secondary' style={{ textDecoration: 'underline' }}>React Online Quiz</h1>
        <div className='container w-75 p-5 m-5'>
          <div>
            <h2>Ques.{quizQuestions + 1}</h2>
            <h2>{questions[quizQuestions].question}</h2>
          </div>
          <div>{questions[quizQuestions].options.map((question, index) => (
            <div className='d-flex' key={index}>
              <Form.Check className='me-2' onClick={() => handleAnswerClick(question)} // prettier-ignore
                type="checkbox"
                id={`default-checkbox`}
              />{question}
            </div>
          ))}</div>
        </div>
        <div className='d-flex flex-row-reverse'>
          <Button className='btn btn-primary m-2' onClick={reStartQuiz}>Restart Quiz</Button>
          {showSubmit ? (
            <Button className='btn btn-success m-2' onClick={handleSubmit}>Submit</Button>
          ) : (
            <Button className='btn btn-primary m-2' onClick={handleNextQuestion}>Next Question</Button>
          )}
        </div>
        <div>
          {answers ? (
            <h1 className='text-danger'>You scored {score} out of {questions.length}</h1>
          ) : <p></p>}
        </div>
      </div>
    </>
  )
}

export default App
