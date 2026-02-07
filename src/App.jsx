import { useState } from 'react';
import { questions, results } from './data';
import './index.css';

function App() {
  const [step, setStep] = useState('start'); // start, quiz, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  });
  const [resultMBTI, setResultMBTI] = useState('');
  const [questionList, setQuestionList] = useState(questions);

  const handleStart = () => {
    // 1. Group questions by type
    const groups = { EI: [], SN: [], TF: [], JP: [] };
    questions.forEach(q => {
      // Find the type from the first option (assuming both options have the same type)
      const type = q.options[0].type;
      if (groups[type]) groups[type].push(q);
    });

    // 2. Pick 2 random questions from each group
    let selectedQuestions = [];
    ['EI', 'SN', 'TF', 'JP'].forEach(type => {
      const shuffledGroup = [...groups[type]].sort(() => Math.random() - 0.5);
      selectedQuestions.push(...shuffledGroup.slice(0, 2));
    });

    // 3. Shuffle the final list of 8 questions
    selectedQuestions.sort(() => Math.random() - 0.5);

    setQuestionList(selectedQuestions);
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  };

  const handleAnswer = (type, value) => {
    // type is like "EI", value is "E" or "I"
    const newScores = { ...scores, [value]: scores[value] + 1 };
    setScores(newScores);

    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
    const mbti = [
      finalScores.E >= finalScores.I ? 'E' : 'I',
      finalScores.S >= finalScores.N ? 'S' : 'N',
      finalScores.T >= finalScores.F ? 'T' : 'F',
      finalScores.J >= finalScores.P ? 'J' : 'P'
    ].join('');
    
    setResultMBTI(mbti);
    setStep('result');
  };

  return (
    <div className="container">
      {step === 'start' && (
        <div className="card start-screen">
          <h1 className="title">MBTI<br/>Deduction Game</h1>
          <p className="subtitle">상황을 통해 알아보는 나의 진짜 성격</p>
          <button className="start-btn" onClick={handleStart}>
            시작하기
          </button>
        </div>
      )}

      {step === 'quiz' && (
        <div className="card" key={currentQuestionIndex}>
           <div className="progress-bar" style={{
             width: '100%', 
             height: '6px', 
             background: 'rgba(255,255,255,0.1)', 
             borderRadius: '3px',
             marginBottom: '1rem',
             overflow: 'hidden'
           }}>
             <div style={{
               width: `${((currentQuestionIndex + 1) / questionList.length) * 100}%`,
               height: '100%',
               background: 'var(--primary)',
               transition: 'width 0.3s ease'
             }} />
           </div>
           
           <img 
             src={questionList[currentQuestionIndex].image} 
             alt="Situation" 
             className="card-image"
           />
           
           <h3 style={{color: 'var(--accent)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'}}>
             Scenario {currentQuestionIndex + 1}
           </h3>
           <p className="story-text">{questionList[currentQuestionIndex].story}</p>
           <h2 className="question-text">{questionList[currentQuestionIndex].question}</h2>
           
           <div className="options-grid">
             {questionList[currentQuestionIndex].options.map((option, idx) => (
               <button 
                 key={idx} 
                 className="option-btn"
                 onClick={() => handleAnswer(option.type, option.value)}
               >
                 {option.text}
               </button>
             ))}
           </div>
        </div>
      )}

      {step === 'result' && (
        <div className="card result-card">
          <h2 style={{color: '#94a3b8'}}>당신의 성격 유형은</h2>
          <div className="mbti-result">{resultMBTI}</div>
          <p className="result-desc">{results[resultMBTI] || "알 수 없는 유형"}</p>
          <button className="restart-btn" onClick={handleStart}>
            다시 테스트하기
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
