// e -> enter
// i -> imes
// a -> ai
// o -> ober
// u -> ufat

const encryptDecryptRules = [
    {
      letter: 'e',
      word: 'enter',
    },
    {
      letter: 'i',
      word: 'imes',
    },
    {
      letter: 'a',
      word: 'ai',
    },
    {
      letter: 'o',
      word: 'ober',
    },
    {
      letter: 'u',
      word: 'ufat',
    },
  ];
  const cryptDecryptHandler = (message, encrypt) => {
    const firstValueToHandle = encrypt ? 'letter' : 'word';
    const secondValueToHandle = encrypt ? 'word' : 'letter';
    return message
      .replaceAll(
        encryptDecryptRules[0][firstValueToHandle],
        encryptDecryptRules[0][secondValueToHandle],
      )
      .replaceAll(
        encryptDecryptRules[1][firstValueToHandle],
        encryptDecryptRules[1][secondValueToHandle],
      )
      .replaceAll(
        encryptDecryptRules[2][firstValueToHandle],
        encryptDecryptRules[2][secondValueToHandle],
      )
      .replaceAll(
        encryptDecryptRules[3][firstValueToHandle],
        encryptDecryptRules[3][secondValueToHandle],
      )
      .replaceAll(
        encryptDecryptRules[4][firstValueToHandle],
        encryptDecryptRules[4][secondValueToHandle],
      );
  };
  
  const form = document.querySelector('.form-container');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const textSent = event.target[0].value; 
    const selectedAction = event.submitter.className; 
    const emptyTextTag = document.querySelector('.empty-text');
    const newText = document.querySelector('.message'); 
    const copyBtn = document.querySelector('.copy-btn'); 
    const noMessageContainer = document.querySelector('.no-message'); 
    const personImage = document.querySelector('.person');
    const resultContainer = document.querySelector('.result'); 
    const deleteMessage = document.querySelector('.delete-message');
    const textArea = document.querySelector('.text-input');
  
    const noTextStyleHandler = () => {
      
      emptyTextTag.style.display = 'block';
      copyBtn.style.display = 'none';
      noMessageContainer.style.display = 'block';
      newText.innerHTML = '';
      resultContainer.style.justifyContent = 'center';
      personImage.style.display = 'block';
      deleteMessage.style.display = 'none';
    };
  
    deleteMessage.onclick = () => {
    
      textArea.value = '';
      noTextStyleHandler(); 
    };
  
    copyBtn.onclick = () => {
      
      navigator.clipboard.writeText(newText.textContent).then(() => {
      
        alert('Copiado com sucesso!');
      });
    };
  
    if (textSent.length > 0) {
      
      emptyTextTag.style.display = 'none'; 
      copyBtn.style.display = 'block';
      noMessageContainer.style.display = 'none';
      personImage.style.display = 'none';
      resultContainer.style.justifyContent = 'flex-start';
      deleteMessage.style.display = 'block';
      if (selectedAction === 'crypt-btn') {
        newText.innerHTML = cryptDecryptHandler(textSent, true);
      } else {
        newText.innerHTML = cryptDecryptHandler(textSent, false);
      }
    } else {
      noTextStyleHandler();
    }
  });
  