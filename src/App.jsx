import { useState } from 'react';
import { questions, results } from './data';
import './index.css';

function App() {
  const [step, setStep] = useState('start'); // start, quiz, loading, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  });
  const [resultMBTI, setResultMBTI] = useState('');
  const [questionList, setQuestionList] = useState(questions);
  const [showToast, setShowToast] = useState(false);

  // Fisher-Yates Shuffle
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleStart = () => {
    // 1. Group questions by type
    const groups = { EI: [], SN: [], TF: [], JP: [] };
    questions.forEach(q => {
      const type = q.options[0].type;
      if (groups[type]) groups[type].push(q);
    });

    // 2. Pick 3 unique random questions from each group
    let selectedQuestions = [];
    ['EI', 'SN', 'TF', 'JP'].forEach(type => {
      const shuffledGroup = shuffleArray([...groups[type]]);
      selectedQuestions.push(...shuffledGroup.slice(0, 3)); 
    });

    // 3. Shuffle the final list of 12 questions
    const finalQuestions = shuffleArray(selectedQuestions);

    setQuestionList(finalQuestions);
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  };

  const handleAnswer = (type, value) => {
    const newScores = { ...scores, [value]: scores[value] + 1 };
    setScores(newScores);

    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Show loading before the result
      setStep('loading');
      setTimeout(() => {
        calculateResult(newScores);
      }, 2200);
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

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareText = `나의 진짜 MBTI는 [${resultMBTI}]! 흥미로운 심리테스트로 나의 진짜 성격을 알아보세요.`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'MBTI 심리 추리 게임',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share canceled or failed', err);
      }
    } else {
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  return (
    <div className="container">
      {step === 'start' && (
        <div className="card start-screen">
          <h1 className="title">MBTI<br/>Deduction Game</h1>
          <p className="subtitle">상황을 통해 알아보는 나의 진짜 성격</p>
          <button className="start-btn" onClick={handleStart}>
            테스트 시작하기
          </button>
        </div>
      )}

      {step === 'quiz' && (
        <div className="card" key={currentQuestionIndex}>
           <div className="progress-bar" style={{
             width: '100%', 
             height: '8px', 
             background: 'rgba(255,255,255,0.05)', 
             borderRadius: '4px',
             marginBottom: '1.5rem',
             overflow: 'hidden'
           }}>
             <div style={{
               width: `${((currentQuestionIndex + 1) / questionList.length) * 100}%`,
               height: '100%',
               background: 'linear-gradient(90deg, var(--primary), var(--accent))',
               transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
               borderRadius: '4px'
             }} />
           </div>
           
           <img 
             src={questionList[currentQuestionIndex].image} 
             alt="Situation" 
             className="card-image"
           />
           
           <h3 style={{color: 'var(--accent)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem'}}>
             Q. {currentQuestionIndex + 1} / {questionList.length}
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

      {step === 'loading' && (
        <div className="card">
          <div className="loading-container">
            <div className="spinner"></div>
            <h2 className="question-text" style={{marginBottom: '0.5rem', background: 'none', WebkitTextFillColor: '#fff', color: '#fff'}}>
              당신의 심리를 분석 중입니다...
            </h2>
            <p className="story-text">지금까지의 선택을 종합하여 진짜 MBTI를 알아내고 있어요.</p>
          </div>
        </div>
      )}

      {step === 'result' && (
        <div className="card result-card">
          <h2 style={{color: '#94a3b8', fontSize: '1.2rem', fontWeight: 500}}>분석 완료! 당신의 성격 유형은</h2>
          <div className="mbti-result">{resultMBTI}</div>
          <p className="result-desc">{results[resultMBTI] || "알 수 없는 유형"}</p>
          
          <button className="start-btn" onClick={handleShare} style={{marginBottom: '1rem'}}>
            결과 공유하기 🔗
          </button>
          
          <button className="restart-btn" onClick={handleStart}>
            다시 테스트하기
          </button>

          {showToast && <div className="toast">결과 내용이 클립보드에 복사되었습니다!</div>}
        </div>
      )}
    </div>
  );
}

export default App;
