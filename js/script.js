let captchaText = document.getElementById("captcha-text");
let captchaEnter = document.getElementById("captcha-enter");
let refreshbtn = document.getElementById("refresh-btn");
let validatebtn = document.getElementById("validate-btn");
let error = document.getElementById("error");
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha;

// generatecaptcha = () =>{
//     captcha = "";
//     for(i=0;i<7;i++){
//         let index = Math.floor(Math.random()*chars.length);
//         captcha = captcha+chars[index];
//     }
//     captchaText.value = captcha;
// }


// generatecaptcha();
// refreshbtn.addEventListener("click",generatecaptcha)
// validatebtn.addEventListener("click",() => {
//     if(captcha == captchaEnter.value){
//         captchaEnter.value = "";
//         error.innerText = "You Have Enter Valid Captcha";  
//         error.style.display = "block";
//         error.style.backgroundColor = "#def0d8"; 
//         error.style.color = "#416b47";
//     }else{
//         captchaEnter.value = "";
//         error.style.display = "block";
//         error.style.backgroundColor = "#fedfe1"; 
//         error.style.color = "#cd4243";
//         error.innerText = "You Have Enter Invalid Captcha!! Please Enter Captcha Properly"; }});

let hoverCount = 0;
let buttonCreated = false; // 생성 여부를 나타내는 변수


const one = document.getElementById('one');
const mom = document.getElementById('mom');

one.addEventListener('mouseover', () => {
  hoverCount++;

  if (hoverCount === 5 && !buttonCreated) { // 버튼이 생성되지 않은 상태에서만 실행
    const button = document.createElement('button');
    button.textContent = 'Really?';








    button.addEventListener('click', () => {
      const allDivs = document.querySelectorAll('div');
      allDivs.forEach(div => {
        div.style.display = 'none';
    });

      const imgboxContainer = document.createElement('div');
      imgboxContainer.style.display = 'flex';
      imgboxContainer.style.alignItems = 'center';
      imgboxContainer.style.justifyContent = 'center';
      imgboxContainer.style.flexDirection = 'column';

      const title = document.createElement('h1');
      title.textContent = 'Level1. 비숑이 포함된 이미지를 모두 선택하세요';
      title.id = 'title';
      title.style.fontSize = '1rem';

      const imgbox = document.createElement('div');
      imgbox.id = 'imgbox';
      imgbox.style.display = 'grid';
      imgbox.style.gridTemplateColumns = 'repeat(3, 1fr)';
      imgbox.style.gridGap = '0';
      imgbox.style.margin = '0';
      imgbox.style.alignItems = 'center';

      const imageSize = '100%';

      const imageSources = [
        'dog.jpg', 'rice.jpg', 'rice7.jpg',
        'rice6.jpg', 'dog2.jpg', 'dog3.jpg',
        'rice4.jpg', 'rice5.jpg', 'dog4.png'
        ];

      const selectedImages = {};

      imageSources.forEach(src => {
        const newImg = document.createElement('img');
        newImg.src = src;
        newImg.style.width = imageSize;
        newImg.style.height = imageSize;
        newImg.style.objectFit = 'cover';
        newImg.id = src.includes('dog') ? 'dog' : 'notdog';

        newImg.addEventListener('click', () => {
          if (!selectedImages[newImg.id]) {
            selectedImages[newImg.id] = true;
            newImg.style.opacity = '0.5';
        } else {
            selectedImages[newImg.id] = false;
            newImg.style.opacity = '1';
        }
    });

        imgbox.appendChild(newImg);
    });

      const confirmButton = document.createElement('button');
      confirmButton.textContent = '확인';
      confirmButton.addEventListener('click', () => {
        const dogSelected = selectedImages['dog'];

        if (dogSelected && Object.keys(selectedImages).length === 1) {
          alert('인증되었습니다.(1/3)');

     // 버튼과 모든 div 요소를 숨깁니다. level2
          const buttons = document.querySelectorAll('button');
          buttons.forEach(button => {
              button.style.display = 'none';
          });

          const divs = document.querySelectorAll('div');
          divs.forEach(div => {
              div.style.display = 'none';
          });

          const imgboxContainer = document.createElement('div');
          imgboxContainer.style.display = 'flex';
          imgboxContainer.style.alignItems = 'center';
          imgboxContainer.style.justifyContent = 'center';
          imgboxContainer.style.flexDirection = 'column';

          const title = document.createElement('h1');
          title.textContent = 'Level2. C가 포함된 이미지를 모두 선택하세요';
          title.id = 'title';
          title.style.fontSize = '1rem';

          const imgbox = document.createElement('div');
          imgbox.id = 'imgbox';
          imgbox.style.display = 'grid';
          imgbox.style.gridTemplateColumns = 'repeat(3, 1fr)';
          imgbox.style.gridGap = '0';
          imgbox.style.margin = '0';
          imgbox.style.alignItems = 'center';

          const imageSize = '100%';

          const imageSources = [
            'Group 1.jpg', 'C 2.jpg', 'C 3.jpg',
            'C 4.jpg', 'Group 5.jpg', 'Group 6.jpg',
            'Group 7.jpg', 'Group 8.jpg', 'C 9.jpg'
            ];

          const selectedImages = {};

          imageSources.forEach(src => {
            const newImg = document.createElement('img');
            newImg.src = src;
            newImg.style.width = imageSize;
            newImg.style.height = imageSize;
            newImg.style.objectFit = 'cover';
            newImg.id = src.includes('C') ? 'C' : 'notC';

            newImg.addEventListener('click', () => {
              if (!selectedImages[newImg.id]) {
                selectedImages[newImg.id] = true;
                newImg.style.opacity = '0.5';
            } else {
                selectedImages[newImg.id] = false;
                newImg.style.opacity = '1';
            }
        });

            imgbox.appendChild(newImg);
        });

          const confirmButton = document.createElement('button');
          confirmButton.textContent = '확인';
          confirmButton.addEventListener('click', () => {
            const dogSelected = selectedImages['C'];

            if (dogSelected && Object.keys(selectedImages).length === 1) {
              alert('인증되었습니다.(2/3)');

     // 버튼과 모든 div 요소를 숨깁니다. level3
              const buttons = document.querySelectorAll('button');
              buttons.forEach(button => {
                  button.style.display = 'none';
              });

              const divs = document.querySelectorAll('div');
              divs.forEach(div => {
                  div.style.display = 'none';
              });

const imgboxContainer = document.createElement('div');
          imgboxContainer.style.display = 'flex';
          imgboxContainer.style.alignItems = 'center';
          imgboxContainer.style.justifyContent = 'center';
          imgboxContainer.style.flexDirection = 'column';

          const title = document.createElement('h1');
          title.textContent = 'Level3. 6이 포함된 이미지를 모두 선택하세요';
          title.id = 'title';
          title.style.fontSize = '1rem';

          const imgbox = document.createElement('div');
          imgbox.id = 'imgbox';
          imgbox.style.display = 'grid';
          imgbox.style.gridTemplateColumns = 'repeat(3, 1fr)';
          imgbox.style.gridGap = '0';
          imgbox.style.margin = '0';
          imgbox.style.alignItems = 'center';

          const imageSize = '100%';

          const imageSources = [
            'T1.jpg', 'F2.jpg', 'F3.jpg',
            'F4.jpg', 'T5.jpg', 'F6.jpg',
            'T7.jpg', 'F8.jpg', 'T9.jpg'
            ];

          const selectedImages = {};

          imageSources.forEach(src => {
            const newImg = document.createElement('img');
            newImg.src = src;
            newImg.style.width = imageSize;
            newImg.style.height = imageSize;
            newImg.style.objectFit = 'cover';
            newImg.id = src.includes('T') ? 'T' : 'notT';

            newImg.addEventListener('click', () => {
              if (!selectedImages[newImg.id]) {
                selectedImages[newImg.id] = true;
                newImg.style.opacity = '0.5';
            } else {
                selectedImages[newImg.id] = false;
                newImg.style.opacity = '1';
            }
        });

            imgbox.appendChild(newImg);
        });

          const confirmButton = document.createElement('button');
          confirmButton.textContent = '확인';
          confirmButton.addEventListener('click', () => {
            const dogSelected = selectedImages['T'];

            if (dogSelected && Object.keys(selectedImages).length === 1) {
              alert('인증되었습니다.(3/3)');

     // 버튼과 모든 div 요소를 숨깁니다. level3
              const buttons = document.querySelectorAll('button');
              buttons.forEach(button => {
                  button.style.display = 'none';
              });

              const divs = document.querySelectorAll('div');
              divs.forEach(div => {
                  div.style.display = 'none';
              });


alert('congratulation!');
alert('당신은 로봇이 아닙니다');





          } else {
              alert('새로고침 후 다시 시도하세요');
          }
      });

          imgboxContainer.appendChild(title);
          imgboxContainer.appendChild(imgbox);
          document.body.appendChild(imgboxContainer);
          document.body.appendChild(confirmButton);






          } else {
              alert('새로고침 후 다시 시도하세요');
          }
      });

          imgboxContainer.appendChild(title);
          imgboxContainer.appendChild(imgbox);
          document.body.appendChild(imgboxContainer);
          document.body.appendChild(confirmButton);








      } else {
          alert('새로고침 후 다시 시도하세요');
      }
  });

      imgboxContainer.appendChild(title);
      imgboxContainer.appendChild(imgbox);
      document.body.appendChild(imgboxContainer);
      document.body.appendChild(confirmButton);
  });






mom.appendChild(button);
    buttonCreated = true; // 버튼이 생성되었음을 나타내는 변수를 true로 변경


}
});

